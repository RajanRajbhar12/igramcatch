import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import InstagramDownloader from "@/components/InstagramDownloader";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import AdSection from "@/components/AdSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Instagram, Shield, Zap, Globe, Clock } from "lucide-react";


export default function Home() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // New state for selected download type
  const [selectedType, setSelectedType] = useState<'video' | 'photo' | 'reel'| 'story'| 'highlight' >('video');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const features = [
    { icon: Shield, title: 'Secure Downloads', description: 'Bank-level security for all your downloads' },
    { icon: Zap, title: 'Lightning Fast', description: 'Download videos in seconds' },
    { icon: Globe, title: 'Global CDN', description: 'Servers worldwide for fastest speeds' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock customer service' }
  ];

  // Function to render the correct section based on selected type
  const renderDownloadSection = () => {
    switch (selectedType) {
      case 'video':
        return <InstagramDownloader type="video" />;
      case 'photo':
        return <InstagramDownloader type="photo" />;
      case 'reel':
        return <InstagramDownloader type="reel" />;
      case 'story':
        return <InstagramDownloader type="story" />;
      case 'highlight':
        return <InstagramDownloader type="highlight" />;
      default:
        return <InstagramDownloader type="video" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-dark">
      <main>
        <div className="relative bg-gradient-to-r from-purple-900 via-purple-800 to-pink-800 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1800&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
          <div className="relative">
            <header className="container mx-auto px-4 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Instagram className="h-10 w-10 text-white" />
                  <span className="text-3xl font-bold text-white">
                    IGRAM<span className="text-pink-400">Catch</span>
                  </span>
                </div>
              </div>
            </header>

            <div className="container mx-auto px-4 py-4 text-center">
              <p className="text-xl text-white/80 mb-2 max-w-2xl mx-auto">Downloading made easy</p>
              
              {/* Buttons for selecting type */}
              <div className="mb-2 flex justify-center space-x-4">
                <button
                  className={`px-4 py-2 text-white ${selectedType === 'video' ? 'bg-pink-500' : 'bg-purple-500'} rounded-lg`}
                  onClick={() => setSelectedType('video')}
                >
                  Videos
                </button>
                <button
                  className={`px-4 py-2 text-white ${selectedType === 'photo' ? 'bg-pink-500' : 'bg-purple-500'} rounded-lg`}
                  onClick={() => setSelectedType('photo')}
                >
                  Photos
                </button>
                <button
                  className={`px-4 py-2 text-white ${selectedType === 'reel' ? 'bg-pink-500' : 'bg-purple-500'} rounded-lg`}
                  onClick={() => setSelectedType('reel')}
                >
                  Reels
                </button>
                <button
                  className={`px-4 py-2 text-white ${selectedType === 'story' ? 'bg-pink-500' : 'bg-purple-500'} rounded-lg`}
                  onClick={() => setSelectedType('story')}
                >
                  Story
                </button>
                <button
                  className={`px-4 py-2 text-white ${selectedType === 'highlight' ? 'bg-pink-500' : 'bg-purple-500'} rounded-lg`}
                  onClick={() => setSelectedType('highlight')}
                >
                  Highlights
                </button>
              </div>

              {/* Render appropriate download section based on selected type */}
              <section className="py-2 bg-transparent">
                <div className="container mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Instagram {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)} Downloader</h2>
                  </div>
                  {renderDownloadSection()}
                  <AdSection />
                </div>
              </section>
            </div>
          </div>
        </div>
        
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
