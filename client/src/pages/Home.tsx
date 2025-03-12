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

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-dark">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Try It Out</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience how easy it is to download Instagram content.
              </p>
            </div>
            <InstagramDownloader />
          </div>
        </section>
        <TestimonialsSection />
        <FAQSection />
        <AdSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
