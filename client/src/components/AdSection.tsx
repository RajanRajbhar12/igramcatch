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
        adScript.dataset.adClient = 'ca-pub-YOURPUBLISHERID'; // Replace with your actual publisher ID
        adScript.dataset.adSlot = 'YOURADSLOT'; // Replace with your actual ad slot
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
    <section className="py-8 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <p className="text-sm text-gray-500 mb-2">Advertisement</p>
            <div ref={adContainerRef} className="bg-gray-100 py-8 px-4 rounded min-h-16 flex items-center justify-center">
              {process.env.NODE_ENV === "development" && (
                <p className="text-gray-400">Google AdSense will appear here</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
