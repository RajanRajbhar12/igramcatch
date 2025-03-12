import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiRequest } from "@/lib/queryClient";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Download, RotateCw, AlertCircle } from "lucide-react";

const instagramUrlSchema = z.object({
  url: z.string()
    .url({ message: "Please enter a valid URL" })
    .refine((url) => url.includes('instagram.com'), {
      message: "Please enter a valid Instagram URL"
    })
});

type InstagramUrlForm = z.infer<typeof instagramUrlSchema>;

type InstagramContent = {
  id: string;
  type: string;
  thumbnail: string;
  caption: string;
  downloadUrl: string;
};

export default function InstagramDownloader() {
  const [isLoading, setIsLoading] = useState(false);
  const [contentPreview, setContentPreview] = useState<InstagramContent | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<InstagramUrlForm>({
    resolver: zodResolver(instagramUrlSchema),
    defaultValues: {
      url: "",
    },
  });

  async function fetchContent(data: InstagramUrlForm) {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await apiRequest("POST", "/api/instagram/fetch", data);
      const contentData = await response.json();
      setContentPreview(contentData);
    } catch (err) {
      console.error(err);
      setError("Unable to fetch content. Please check the URL and try again.");
      toast({
        title: "Error",
        description: "Failed to fetch Instagram content. Please try a different URL.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDownload() {
    if (!contentPreview) return;
    
    try {
      const response = await fetch(contentPreview.downloadUrl);
      const blob = await response.blob();
      
      // Create a download link
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = `instagram-${contentPreview.id}.${contentPreview.type === 'video' ? 'mp4' : 'jpg'}`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      
      toast({
        title: "Success!",
        description: "Content downloaded successfully.",
        variant: "default",
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Download Failed",
        description: "Unable to download the content. Please try again.",
        variant: "destructive",
      });
    }
  }

  function resetForm() {
    form.reset();
    setContentPreview(null);
    setError(null);
  }

  return (
    <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl shadow-md">
      {!contentPreview && !error && !isLoading && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(fetchContent)} className="mb-6">
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="instagram-url" className="block text-sm font-medium text-gray-700 mb-1">
                      Instagram URL
                    </label>
                    <div className="flex">
                      <FormControl>
                        <Input
                          id="instagram-url"
                          placeholder="https://www.instagram.com/p/..."
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-primary focus:outline-none"
                          {...field}
                        />
                      </FormControl>
                      <Button 
                        type="submit" 
                        className="bg-primary text-white px-6 py-3 rounded-r-md hover:bg-blue-600 transition-colors flex items-center justify-center"
                        disabled={form.formState.isSubmitting}
                      >
                        <span>Fetch</span>
                        <i className="fas fa-arrow-right ml-2"></i>
                      </Button>
                    </div>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </form>
        </Form>
      )}
      
      {isLoading && (
        <div className="py-12 text-center">
          <div className="inline-block w-12 h-12 border-4 border-gray-300 border-t-primary rounded-full mb-4 animate-spin"></div>
          <p className="text-gray-600">Fetching content...</p>
        </div>
      )}
      
      {contentPreview && (
        <div className="fade-in">
          <div className="mb-4 p-4 bg-white rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="w-32 h-32 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                <img 
                  src={contentPreview.thumbnail} 
                  alt="Instagram content preview" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold mb-1">Instagram {contentPreview.type.charAt(0).toUpperCase() + contentPreview.type.slice(1)}</h3>
                <p className="text-sm text-gray-500 mb-2">
                  <i className="fas fa-photo-video mr-1"></i>
                  <span>{contentPreview.type.charAt(0).toUpperCase() + contentPreview.type.slice(1)}</span>
                </p>
                <p className="text-gray-600 text-sm">{contentPreview.caption || "No caption available"}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button 
              onClick={handleDownload}
              className="flex-1 bg-secondary text-blue-500 py-3 px-6 rounded-md hover:bg-white transition-colors flex items-center justify-center"
            >
              <Download className="mr-2 h-5 w-5" />
              <span>Download Now</span>
            </Button>
            <Button 
              onClick={resetForm}
              className="flex-shrink-0 bg-gray-200 text-gray-800 py-3 px-4 rounded-md hover:bg-gray-300 transition-colors"
              variant="outline"
            >
              <RotateCw className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
      
      {error && (
        <div className="py-8 text-center">
          <div className="text-error text-5xl mb-4">
            <AlertCircle className="h-16 w-16 mx-auto text-destructive" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Unable to Fetch Content</h3>
          <p className="text-gray-600 mb-4">
            We couldn't retrieve the content from the provided URL. Please check the link and try again.
          </p>
          <Button 
            onClick={resetForm}
            className="bg-gray-200 text-gray-800 py-2 px-6 rounded-md hover:bg-gray-300 transition-colors"
            variant="outline"
          >
            Try Again
          </Button>
        </div>
      )}
    </div>
  );
}
