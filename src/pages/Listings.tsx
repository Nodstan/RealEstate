import React, { useState, useMemo } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import FilterSidebar from '../components/listings/FilterSidebar';
import PropertyCard from '../components/PropertyCard';
import propertiesData from '../data/properties.json';
import type { Property } from '../types';

const Listings: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sort, setSort] = useState('newest');
  const [filters, setFilters] = useState({
    search: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
  });

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      type: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
    });
  };

  const filteredProperties = useMemo(() => {
    return (propertiesData as Property[]).filter(property => {
      // Search (Location or Title)
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        const matchTitle = property.title.toLowerCase().includes(searchTerm);
        const matchLocation = property.location.toLowerCase().includes(searchTerm);
        if (!matchTitle && !matchLocation) return false;
      }

      // Type
      if (filters.type && property.type !== filters.type) return false;

      // Price
      if (filters.minPrice && property.price < Number(filters.minPrice)) return false;
      if (filters.maxPrice && property.price > Number(filters.maxPrice)) return false;

      // Bedrooms
      if (filters.bedrooms && property.bedrooms < Number(filters.bedrooms)) return false;

      return true;
    }).sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      return 0; // Default (Newest / ID order)
    });
  }, [filters, sort]);

  return (
    <div className="min-h-screen py-8 bg-city-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Properties for Sale</h1>
            <p className="text-gray-600 mt-1">
              Showing {filteredProperties.length} properties
            </p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <button 
              className="md:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full md:w-48 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar - Desktop */}
          <div className="hidden md:block w-64 shrink-0">
            <FilterSidebar 
              filters={filters} 
              onFilterChange={handleFilterChange} 
              onClearFilters={clearFilters}
            />
          </div>

          {/* Sidebar - Mobile */}
          {isFilterOpen && (
            <div className="md:hidden mb-6">
              <FilterSidebar 
                filters={filters} 
                onFilterChange={handleFilterChange} 
                onClearFilters={clearFilters}
              />
            </div>
          )}

          {/* Grid */}
          <div className="flex-1">
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
                <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
                <button 
                  onClick={clearFilters}
                  className="mt-4 text-blue-600 font-medium hover:text-blue-800"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
