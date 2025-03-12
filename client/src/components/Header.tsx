import { Link } from "wouter";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <i className="fas fa-camera text-primary text-2xl"></i>
          <span className="font-bold text-xl md:text-2xl text-dark">InstaSave</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li className="hidden md:block">
              <a href="#features" className="text-gray-600 hover:text-primary transition-colors">
                Features
              </a>
            </li>
            <li className="hidden md:block">
              <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">
                How It Works
              </a>
            </li>
            <li>
              <a href="#join-waitlist" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Join Waitlist
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
