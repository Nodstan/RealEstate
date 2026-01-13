import React from 'react';
import ContactForm from '../../components/ContactForm';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-blue-50/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Have Questions? Get in Touch!</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Whether you're looking to buy, sell, or rent, our team of experts is ready to assist you. 
              Fill out the form and we'll get back to you as soon as possible.
            </p>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" 
                alt="Real Estate Agent" 
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
