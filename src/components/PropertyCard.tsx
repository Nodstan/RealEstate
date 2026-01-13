import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Move, MapPin } from 'lucide-react';
import type { Property } from '../types';
import { formatPrice } from '../utils';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link to={`/properties/${property.id}`} className="group block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
          {property.type}
        </div>
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-bold px-3 py-1 rounded-lg">
          {formatPrice(property.price)}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{property.title}</h3>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin className="h-4 w-4 mr-1 shrink-0" />
          <span className="line-clamp-1">{property.location}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-600 border-t border-gray-100 pt-3">
          <div className="flex items-center gap-1.5">
            <Bed className="h-4 w-4 text-blue-500" />
            <span className="font-medium">{property.bedrooms}</span> <span className="text-xs text-gray-400">Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-blue-500" />
            <span className="font-medium">{property.bathrooms}</span> <span className="text-xs text-gray-400">Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Move className="h-4 w-4 text-blue-500" />
            <span className="font-medium">{property.area}</span> <span className="text-xs text-gray-400">sqft</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
