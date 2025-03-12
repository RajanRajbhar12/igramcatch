import { 
  Bolt, 
  Lock, 
  Smartphone, 
  ImagePlus, 
  Infinity, 
  UserCheck
} from "lucide-react";

const features = [
  {
    icon: Bolt,
    title: "Fast Downloads",
    description: "Download any Instagram content in seconds, without quality loss."
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "We don't store your content or personal information."
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Works perfectly on all devices, save directly to your phone."
  },
  {
    icon: ImagePlus,
    title: "All Content Types",
    description: "Download photos, videos, reels, and stories with equal ease."
  },
  {
    icon: Infinity,
    title: "Unlimited Downloads",
    description: "No daily limits or restrictions on how much you can download."
  },
  {
    icon: UserCheck,
    title: "No Login Required",
    description: "Use our service without creating an account or logging in."
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to save and enjoy Instagram content offline.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-primary mb-4 text-3xl">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
