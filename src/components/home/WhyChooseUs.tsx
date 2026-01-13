import React from 'react';
import { Shield, Clock, Users, Award } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Trusted By Thousands',
      description: 'We have built a reputation for trust and integrity in the real estate market.'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: '24/7 Support',
      description: 'Our dedicated team is available around the clock to answer your questions.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Expert Agents',
      description: 'Work with the best professionals in the industry to find your perfect home.'
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Best Price Guarantee',
      description: 'We ensure you get the best deal possible on your property purchase.'
    }
  ];

  return (
    <section className="py-20 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are committed to providing the best service and experience for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
