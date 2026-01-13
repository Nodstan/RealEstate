import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Move, ArrowLeft } from 'lucide-react';
import propertiesData from '../data/properties.json';
import type { Property } from '../types';
import { formatPrice } from '../utils';
import ImageGallery from '../components/property/ImageGallery';
import AgentCard from '../components/property/AgentCard';
import PropertyCard from '../components/PropertyCard';

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = (propertiesData as Property[]).find(p => p.id === id);

  // Scroll to top when id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h2>
          <Link to="/listings" className="text-blue-600 hover:text-blue-800 font-medium">
            Back to Listings
          </Link>
        </div>
      </div>
    );
  }

  const similarProperties = (propertiesData as Property[])
    .filter(p => p.type === property.type && p.id !== property.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen py-8 bg-city-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/listings" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Listings
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                    {property.location}
                  </div>
                </div>
                <div className="text-3xl font-bold text-blue-600">
                  {formatPrice(property.price)}
                </div>
              </div>
              
              {/* Key Features */}
              <div className="flex gap-6 border-y border-gray-200 py-4 mb-6">
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-gray-400" />
                  <span className="font-semibold">{property.bedrooms}</span> <span className="text-gray-600">Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-gray-400" />
                  <span className="font-semibold">{property.bathrooms}</span> <span className="text-gray-600">Baths</span>
                </div>
                <div className="flex items-center gap-2">
                  <Move className="h-5 w-5 text-gray-400" />
                  <span className="font-semibold">{property.area}</span> <span className="text-gray-600">sqft</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm font-medium">{property.type}</span>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <ImageGallery images={property.images} />

            {/* Description */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-600 leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Features List (Mock) */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Property Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Air Conditioning', 'Swimming Pool', 'Central Heating', 'Laundry Room', 'Gym', 'Alarm', 'Window Covering', 'WiFi'].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <AgentCard />
          </div>
        </div>

        {/* Similar Properties */}
        {similarProperties.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Similar Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarProperties.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetails;
