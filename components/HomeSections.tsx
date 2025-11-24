import React from 'react';
import { Globe, Users, Clock, Star, Quote, ArrowRight } from 'lucide-react';

// Section 1: Global Network (Fixed Background)
export const GlobalNetwork: React.FC = () => {
  return (
    <section className="relative w-full py-32 bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80")' }}>
      <div className="absolute inset-0 bg-brand-dark/80"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-brand-orange font-bold uppercase tracking-wider mb-2 block">Global Connectivity</span>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">Delivering Excellence <br/> Across Borders</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
          <div className="flex flex-col items-center">
             <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20">
                <Globe className="w-10 h-10 text-brand-orange" />
             </div>
             <h3 className="text-5xl font-bold mb-2">200+</h3>
             <p className="text-gray-300 uppercase tracking-widest text-sm">Countries Served</p>
          </div>
          <div className="flex flex-col items-center">
             <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20">
                <Users className="w-10 h-10 text-brand-orange" />
             </div>
             <h3 className="text-5xl font-bold mb-2">5M+</h3>
             <p className="text-gray-300 uppercase tracking-widest text-sm">Parcels Delivered</p>
          </div>
          <div className="flex flex-col items-center">
             <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20">
                <Clock className="w-10 h-10 text-brand-orange" />
             </div>
             <h3 className="text-5xl font-bold mb-2">24/7</h3>
             <p className="text-gray-300 uppercase tracking-widest text-sm">Live Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 2: Testimonials (Standard)
export const Testimonials: React.FC = () => {
    const reviews = [
        {
            name: "James Wilson",
            role: "Logistics Manager, TechCorp",
            content: "LogiXpress transformed our supply chain. The real-time tracking is a game changer for our high-value electronics shipments.",
            rating: 5
        },
        {
            name: "Sarah Al-Fayed",
            role: "Owner, Boutique Imports",
            content: "Reliable, fast, and transparent. I never have to worry about customs delays because their team handles everything professionally.",
            rating: 5
        },
        {
            name: "Michael Chang",
            role: "Operations Director, AutoParts Global",
            content: "We move heavy freight internationally, and LogiXpress has consistently delivered on time, even during peak seasons.",
            rating: 5
        }
    ];

    return (
        <section className="py-24 bg-brand-light text-brand-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Trusted by Industry Leaders</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">See what our partners around the world are saying about our service.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-gray-100 relative">
                            <Quote className="absolute top-8 right-8 text-brand-orange/20 w-12 h-12" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-brand-orange text-brand-orange" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-8 leading-relaxed italic">"{review.content}"</p>
                            <div>
                                <h4 className="font-bold text-lg">{review.name}</h4>
                                <p className="text-sm text-gray-500">{review.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Section 3: Call to Action (Fixed Background)
export const CTASection: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
    return (
        <section className="relative w-full py-32 bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1516937941348-c09e55483f5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}>
            <div className="absolute inset-0 bg-brand-orange/90 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/40"></div>
            
            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Streamline Your Logistics?</h2>
                <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
                    Join thousands of businesses that trust LogiXpress for their shipping needs. 
                    Get a quote today and experience the difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button 
                        onClick={() => onNavigate('track')}
                        className="bg-white text-brand-orange px-10 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-gray-100 transition-colors shadow-lg"
                    >
                        Track Shipment
                    </button>
                    <button 
                         onClick={() => { window.location.hash = 'contact'; }}
                         className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-brand-orange transition-colors flex items-center justify-center gap-2"
                    >
                        Contact Us <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};