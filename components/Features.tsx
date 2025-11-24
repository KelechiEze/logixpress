import React from 'react';
import { ShieldCheck, Clock, DollarSign, Package, Globe, ThumbsUp } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: "Experienced Logistics",
      description: "Our specialists bring decades of experience in freight forwarding and customs clearance, ensuring smooth supply chain solutions."
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: "Fast Delivery Commitment",
      description: "We understand the urgency of every shipment and act quickly. Optimized routes ensure timely deliveries."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: "Transparent Pricing Policy",
      description: "Our pricing is clear, competitive, and easy to understand for all clients. We guarantee no hidden charges."
    },
    {
      icon: <Package className="w-8 h-8 text-white" />,
      title: "Reliable Cargo Handling",
      description: "Every shipment is managed with precision and care to avoid risks. From packing to loading, we guarantee safety."
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Comprehensive Solutions",
      description: "We cover every step of logistics including warehousing, distribution, and freight with integrated services."
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-white" />,
      title: "Satisfaction Guarantee",
      description: "Your trust is our highest priority. We back our services with responsive support and a strong satisfaction guarantee."
    }
  ];

  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-brand-orange font-semibold uppercase tracking-wider text-sm mb-3">Why Choose Us</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight">
            Trusted Logistics Partner for Worldwide Shipping
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6 group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-brand-orange flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
