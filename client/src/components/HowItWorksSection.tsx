const steps = [
  {
    number: 1,
    title: "Copy Link",
    description: "Copy the URL of the Instagram post, video, or reel you want to download."
  },
  {
    number: 2,
    title: "Paste & Preview",
    description: "Paste the URL in our tool and preview the content before downloading."
  },
  {
    number: 3,
    title: "Download",
    description: "Click download and save the content directly to your device."
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to download your favorite Instagram content.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="step-card text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
