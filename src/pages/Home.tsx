import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProperties from '../components/home/FeaturedProperties';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';

import ContactSection from '../components/home/ContactSection';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-city-pattern">
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default Home;
