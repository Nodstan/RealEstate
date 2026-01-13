import React from 'react';
import { Phone, Mail, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const AgentCard: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-gray-100 p-3 rounded-full">
          <User className="h-8 w-8 text-gray-500" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">John Agent</h3>
          <p className="text-gray-500 text-sm">Senior Property Consultant</p>
        </div>
      </div>

      <div className="space-y-4">
        <Link to="/contact" className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
          <Phone className="h-5 w-5" />
          Call Agent
        </Link>
        <Link to="/contact" className="w-full bg-white text-blue-600 border border-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
          <Mail className="h-5 w-5" />
          Send Email
        </Link>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <h4 className="text-sm font-semibold text-gray-900 mb-4">Request a Tour</h4>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Message"
            rows={3}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button type="submit" className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgentCard;
