export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Start Downloading?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join our waitlist today and be the first to use our Instagram downloader when it launches.
        </p>
        <a 
          href="#join-waitlist" 
          className="inline-block bg-white text-primary font-medium px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-lg"
        >
          Join Waitlist Now
        </a>
      </div>
    </section>
  );
}
