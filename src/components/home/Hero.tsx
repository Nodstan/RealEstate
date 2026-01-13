import React from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/listings');
  };

  return (
    <div className="relative h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Find Your Dream Home
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Discover the perfect property that fits your lifestyle. From modern villas to cozy apartments, we have it all.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="bg-white p-4 rounded-xl shadow-lg flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
          <div className="flex-1">
            <input 
              type="text" 
              placeholder="Location (e.g. New York)" 
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex-1">
            <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600">
              <option value="">Property Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
            </select>
          </div>
          <div className="flex-1">
             <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600">
              <option value="">Price Range</option>
              <option value="0-500000">$0 - $500k</option>
              <option value="500000-1000000">$500k - $1M</option>
              <option value="1000000+">$1M+</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
            <Search className="h-5 w-5" />
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
