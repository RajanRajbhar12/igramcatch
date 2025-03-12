import { useEffect, useRef } from "react";

export default function AdSection() {
  const adContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load AdSense ad if not in development mode
    if (process.env.NODE_ENV !== "development" && adContainerRef.current) {
      try {
        const adScript = document.createElement('ins');
        adScript.className = 'adsbygoogle';
        adScript.style.display = 'block';
        adScript.dataset.adClient = 'ca-pub-5570291290467879'; // Replace with your actual publisher ID
        adScript.dataset.adSlot = '1234567890'; // Replace with your actual ad slot
        adScript.dataset.adFormat = 'auto';
        adScript.dataset.fullWidthResponsive = 'true';

        adContainerRef.current.appendChild(adScript);

        // Execute AdSense code
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.error("Error loading AdSense:", error);
      }
    }
  }, []);

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-transparent p-4 rounded-lg shadow-sm text-center">
            <p className="text-sm text-gray-500 mb-2">Advertisement</p>
            <div ref={adContainerRef} className="bg-transparent py-8 px-4 rounded min-h-16 flex items-center justify-center">
              {process.env.NODE_ENV === "development" && (
                <div className="text-gray-400">
                  <p className="text-lg">Mock Ad - This space will display ads in production</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
