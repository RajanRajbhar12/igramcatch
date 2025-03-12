import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <i className="fas fa-camera text-primary text-xl"></i>
              <span className="font-bold text-xl">InstaSave</span>
            </div>
            <p className="text-gray-400">
              The easiest way to download and save your favorite Instagram content.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Features</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Photo Downloads</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Video Downloads</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Reels Downloads</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Story Downloads</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-twitter text-xl"></i></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-facebook text-xl"></i></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-instagram text-xl"></i></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-github text-xl"></i></a>
            </div>
            <p className="text-gray-400">Stay updated with our latest news and features.</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} InstaSave. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
