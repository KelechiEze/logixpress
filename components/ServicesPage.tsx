import React, { useState } from 'react';
import { Plane, Ship, Truck, Package, Globe, Shield, X, CheckCircle, ArrowRight } from 'lucide-react';

interface ServiceDetail {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  image: string;
  fullDesc: string;
  benefits: string[];
  process: { step: string; desc: string }[];
}

export const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const services: ServiceDetail[] = [
    {
      id: 'air-freight',
      icon: <Plane className="w-6 h-6" />,
      title: 'Air Freight',
      shortDesc: 'Fast and secure air cargo services for your time-sensitive shipments.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
      fullDesc: 'When time is critical, our Air Freight services provide the speed and reliability you need. We leverage strong partnerships with major commercial airlines and cargo carriers to offer flight connections to every corner of the globe. Whether it is urgent documents, perishable goods, or high-value electronics, we ensure priority handling.',
      benefits: ['Global coverage with daily flights', 'Express and Consolidated options', 'Door-to-door delivery', 'Real-time tracking visibility'],
      process: [
        { step: '01. Booking', desc: 'Secure space on the fastest available flight.' },
        { step: '02. Pickup & Screen', desc: 'Cargo is collected and screened for safety.' },
        { step: '03. Air Transit', desc: 'Flown directly to the destination airport.' },
        { step: '04. Final Mile', desc: 'Customs cleared and delivered to consignee.' }
      ]
    },
    {
      id: 'ocean-freight',
      icon: <Ship className="w-6 h-6" />,
      title: 'Ocean Freight',
      shortDesc: 'Cost-effective sea shipping solutions for large volume cargo.',
      image: 'https://images.unsplash.com/photo-1494412574643-35d324688b91?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      fullDesc: 'Ocean freight remains the backbone of global trade. We offer flexible solutions for Full Container Loads (FCL) and Less than Container Loads (LCL). Our team negotiates competitive rates and manages the complexities of port logistics so you do not have to.',
      benefits: ['Most cost-effective for bulk goods', 'FCL and LCL consolidation', 'Handling of hazardous materials', 'Port-to-Port & Door-to-Door'],
      process: [
        { step: '01. Container Loading', desc: 'Goods are packed into secure containers.' },
        { step: '02. Port Drayage', desc: 'Transported to the departure port.' },
        { step: '03. Ocean Voyage', desc: 'Sailing via optimized shipping lanes.' },
        { step: '04. Deconsolidation', desc: 'Unpacked and distributed upon arrival.' }
      ]
    },
    {
      id: 'road-freight',
      icon: <Truck className="w-6 h-6" />,
      title: 'Road Freight',
      shortDesc: 'Reliable trucking networks across continents.',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
      fullDesc: 'Our road freight network connects cities, countries, and borders. From full truckload (FTL) to less-than-truckload (LTL), we utilize a modern fleet equipped with GPS tracking to ensure your goods are moving efficiently on the ground.',
      benefits: ['Flexible scheduling', 'Cross-border expertise', 'Temperature-controlled trucks', 'Dedicated fleet options'],
      process: [
        { step: '01. Dispatch', desc: 'Nearest driver assigned to pickup.' },
        { step: '02. Loading', desc: 'Safe loading and securing of cargo.' },
        { step: '03. Transit', desc: 'GPS-monitored drive to destination.' },
        { step: '04. Unloading', desc: 'Professional offloading at the dock.' }
      ]
    },
    {
      id: 'warehousing',
      icon: <Package className="w-6 h-6" />,
      title: 'Warehousing',
      shortDesc: 'Secure storage facilities with advanced inventory management.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80',
      fullDesc: 'Our state-of-the-art warehouses are more than just storage space; they are strategic hubs for your supply chain. With 24/7 security, climate control, and advanced WMS (Warehouse Management Systems), we provide real-time inventory visibility and rapid order fulfillment.',
      benefits: ['Short & Long-term storage', 'Pick and Pack services', 'Inventory management', 'Cross-docking capabilities'],
      process: [
        { step: '01. Inbound', desc: 'Goods received and inspected.' },
        { step: '02. Putaway', desc: 'Stored in designated bin locations.' },
        { step: '03. Management', desc: 'Real-time tracking via WMS.' },
        { step: '04. Outbound', desc: 'Picked, packed, and shipped.' }
      ]
    },
    {
      id: 'project-logistics',
      icon: <Globe className="w-6 h-6" />,
      title: 'Project Logistics',
      shortDesc: 'Specialized handling for oversized or high-value cargo.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      fullDesc: 'Complex projects require precision planning. We specialize in moving heavy, out-of-gauge, and critical equipment for industries like construction, oil & gas, and energy. Our engineers conduct route surveys to ensure feasible transport for massive loads.',
      benefits: ['Route surveys & feasibility studies', 'Heavy lift capabilities', 'Customs consultancy', 'On-site supervision'],
      process: [
        { step: '01. Planning', desc: 'Engineering and route assessment.' },
        { step: '02. Permits', desc: 'Acquiring necessary transport permits.' },
        { step: '03. Transport', desc: 'Multi-modal movement of heavy cargo.' },
        { step: '04. Delivery', desc: 'Positioning at the final site.' }
      ]
    },
    {
      id: 'secure-shipping',
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure Shipping',
      shortDesc: 'High-security transport for sensitive goods.',
      image: 'https://images.unsplash.com/photo-1566576912906-2532f6b3db58?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      fullDesc: 'When security is paramount, LogiXpress delivers. We offer armored transport, constant satellite monitoring, and vetted security personnel for high-value assets such as art, bullion, and confidential prototypes. Your peace of mind is our priority.',
      benefits: ['Armored vehicles', '24/7 Satellite monitoring', 'Vetted personnel', 'Comprehensive insurance'],
      process: [
        { step: '01. Protocol', desc: 'Security protocols established.' },
        { step: '02. Escort', desc: 'Armed or unarmed escort assignment.' },
        { step: '03. Monitor', desc: 'Continuous tracking center oversight.' },
        { step: '04. Handover', desc: 'Biometric verification at delivery.' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <div className="relative h-[60vh] bg-black overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' }}
        >
             <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center pt-20">
            <h4 className="text-brand-orange font-bold uppercase tracking-wider mb-4 animate-fade-in-up">What We Do</h4>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up delay-100">
                World-Class <br/> Logistics Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl animate-fade-in-up delay-200">
                End-to-end supply chain management tailored to your business needs. 
                From air freight to warehousing, we handle it all with precision.
            </p>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
                <div key={service.id} className="bg-gray-50 group hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden flex flex-col">
                    <div className="h-64 overflow-hidden relative flex-shrink-0">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute top-4 right-4 bg-brand-orange p-3 rounded-full text-white">
                            {service.icon}
                        </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <h3 className="text-2xl font-bold text-brand-dark mb-4">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                            {service.shortDesc}
                        </p>
                        <button 
                            onClick={() => setSelectedService(service)}
                            className="text-brand-orange font-bold uppercase text-sm tracking-wider flex items-center gap-2 hover:gap-3 transition-all mt-auto"
                        >
                            Read More <span className="text-xl">→</span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="bg-brand-dark text-white py-20">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                  <div className="text-5xl font-bold text-brand-orange mb-2">98%</div>
                  <div className="text-gray-400">On-Time Delivery</div>
              </div>
              <div>
                  <div className="text-5xl font-bold text-brand-orange mb-2">120+</div>
                  <div className="text-gray-400">Countries Served</div>
              </div>
              <div>
                  <div className="text-5xl font-bold text-brand-orange mb-2">50k+</div>
                  <div className="text-gray-400">Happy Clients</div>
              </div>
              <div>
                  <div className="text-5xl font-bold text-brand-orange mb-2">24/7</div>
                  <div className="text-gray-400">Customer Support</div>
              </div>
          </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedService(null)}></div>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 animate-fade-in-up">
                
                {/* Close Button */}
                <button 
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black text-white p-2 rounded-full transition-colors z-20"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Modal Header Image */}
                <div className="h-64 md:h-80 relative">
                    <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                        <div className="flex items-center gap-3 mb-2">
                             <div className="bg-brand-orange p-2 rounded text-white">{selectedService.icon}</div>
                             <h4 className="text-brand-orange font-bold uppercase tracking-wider text-sm">Service Detail</h4>
                        </div>
                        <h2 className="text-4xl font-bold text-white">{selectedService.title}</h2>
                    </div>
                </div>

                {/* Modal Content */}
                <div className="p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        
                        {/* Main Description */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-brand-dark mb-4">Overview</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {selectedService.fullDesc}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-brand-dark mb-4">How It Works</h3>
                                <div className="space-y-4">
                                    {selectedService.process.map((step, idx) => (
                                        <div key={idx} className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                            <div className="flex-shrink-0 text-brand-orange font-bold font-mono text-lg">{step.step.split('.')[0]}</div>
                                            <div>
                                                <h4 className="font-bold text-brand-dark">{step.step.split('. ')[1]}</h4>
                                                <p className="text-sm text-gray-500">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar: Benefits & CTA */}
                        <div className="space-y-8">
                            <div className="bg-brand-dark text-white p-6 rounded-xl">
                                <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">Key Benefits</h3>
                                <ul className="space-y-4">
                                    {selectedService.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="text-center">
                                <p className="text-gray-500 mb-4 text-sm">Ready to get started?</p>
                                <button 
                                    onClick={() => { setSelectedService(null); window.location.hash = 'contact'; }}
                                    className="w-full bg-brand-orange text-white font-bold py-4 rounded-full hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                                >
                                    Book This Service <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};