import WaitlistForm from "./WaitlistForm";

export default function HeroSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
         
          
          <div className="md:w-1/2 md:pl-12">
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-2 md:p-4">
                <svg className="w-full h-64 rounded-lg bg-gray-200 text-gray-400 flex items-center justify-center" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                  <rect width="600" height="400" fill="#e5e7eb" />
                  <text x="300" y="200" textAnchor="middle" dominantBaseline="middle" fontFamily="Inter, sans-serif" fontSize="24" fill="#9ca3af">
                    Instagram Content Preview
                  </text>
                </svg>
                <div className="absolute -bottom-3 -right-3 bg-primary text-white rounded-full p-4 shadow-lg">
                  <i className="fas fa-arrow-down text-xl"></i>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 transform rotate-6 bg-white rounded-xl shadow-md p-2 md:p-4 max-w-xs">
                <svg className="w-full h-32 rounded-lg bg-gray-200 text-gray-400 flex items-center justify-center" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="200" fill="#e5e7eb" />
                  <text x="200" y="100" textAnchor="middle" dominantBaseline="middle" fontFamily="Inter, sans-serif" fontSize="20" fill="#9ca3af">
                    Instagram Post
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
