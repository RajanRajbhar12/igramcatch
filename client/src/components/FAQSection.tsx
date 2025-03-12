import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this service free to use?",
    answer: "Yes, our basic service is completely free to use. We'll also offer premium features with enhanced capabilities when we officially launch."
  },
  {
    question: "Is it legal to download Instagram content?",
    answer: "Our tool is intended for personal use only. Always respect copyright and Instagram's terms of service. Don't redistribute content without permission from the original creator."
  },
  {
    question: "What content types can I download?",
    answer: "You can download photos, videos, IGTV videos, Reels, and Stories (when available). We support both public and private posts (for which you have the direct URL)."
  },
  {
    question: "When will this product officially launch?",
    answer: "We're currently in the final stages of development and plan to launch within the next few weeks. Join our waitlist to be notified when we go live!"
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our Instagram downloader.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 font-medium flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown 
                  className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <div 
                className={`px-6 py-4 bg-white border-t border-gray-200 ${activeIndex === index ? 'block' : 'hidden'}`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
