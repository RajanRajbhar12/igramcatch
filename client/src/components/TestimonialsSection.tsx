const testimonials = [
  {
    content: "This tool is amazing! So much easier than any other Instagram downloader I've tried. The preview feature is really helpful.",
    author: "Sarah J.",
    role: "Content Creator",
    rating: 5
  },
  {
    content: "I needed to save some Instagram posts for a project, and this tool made it super quick. No annoying ads or redirects. Well done!",
    author: "Michael T.",
    role: "Designer",
    rating: 4.5
  },
  {
    content: "The best Instagram downloader I've found! It even works with Reels which most other tools struggle with. Definitely recommending this.",
    author: "Elena R.",
    role: "Social Media Manager",
    rating: 5
  }
];

export default function TestimonialsSection() {
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
    
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }
    
    return stars;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Early Users Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our beta testers love how simple and effective our tool is.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-lg">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <svg 
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    className="w-6 h-6 text-gray-400"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
