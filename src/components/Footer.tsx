import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Home className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-white">Estate<span className="text-blue-500">Flow</span></span>
            </Link>
            <p className="text-gray-400 text-sm">
              Helping you find your dream home with ease and confidence. Trusted by thousands of happy homeowners.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/listings" className="text-gray-400 hover:text-white text-sm transition-colors">Properties</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Property Types</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/listings?type=House" className="text-gray-400 hover:text-white text-sm transition-colors">Houses</Link>
              </li>
              <li>
                <Link to="/listings?type=Apartment" className="text-gray-400 hover:text-white text-sm transition-colors">Apartments</Link>
              </li>
              <li>
                <Link to="/listings?type=Villa" className="text-gray-400 hover:text-white text-sm transition-colors">Villas</Link>
              </li>
              <li>
                <Link to="/listings?type=Commercial" className="text-gray-400 hover:text-white text-sm transition-colors">Commercial</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                <span className="text-gray-400 text-sm">123 Real Estate Ave, Suite 100<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <span className="text-gray-400 text-sm">hello@estateflow.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} EstateFlow. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
