import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="bg-white py-24 text-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Header */}
            <div>
                <span className="text-brand-orange font-semibold uppercase tracking-wider text-sm mb-4 block">About Us</span>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
                    Optimize your logistics with our modern solutions.
                </h2>
            </div>

            {/* Right Content */}
            <div>
                <p className="text-gray-600 text-lg leading-relaxed mb-12">
                    We provide secure, efficient, and scalable storage services for businesses of all sizes. Reduce costs, streamline operations, and keep your supply chain moving smoothly!
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-4xl font-bold text-brand-dark mb-2">100K+</h3>
                        <p className="text-sm text-gray-500">Square Feet Managed</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-brand-dark mb-2">25K+</h3>
                        <p className="text-sm text-gray-500">Shipments Handled</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-brand-dark mb-2">16+</h3>
                        <p className="text-sm text-gray-500">Years of Warehousing</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Feature Images/Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
            {/* Card 1 */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-brand-orange"></div>
                <div className="relative h-full flex items-center">
                    <div className="w-1/2 p-8 md:p-12 z-10">
                         <h3 className="text-2xl font-bold text-white mb-4">Smart Storage</h3>
                         <p className="text-white/80 leading-relaxed mb-6 text-sm">Secure and flexible warehouse facilities designed to protect your goods and streamline inventory.</p>
                    </div>
                    <div className="absolute right-0 top-0 bottom-0 w-3/5">
                        <img 
                            src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80" 
                            alt="Logistics" 
                            className="w-full h-full object-cover grayscale opacity-50 mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-8 left-8 text-6xl font-bold text-white/20">01</div>
                    </div>
                </div>
            </div>

             {/* Card 2 */}
             <div className="relative h-[400px] rounded-2xl overflow-hidden group bg-brand-dark">
                <div className="relative h-full flex items-center">
                    <div className="w-1/2 p-8 md:p-12 z-10 relative">
                         <h3 className="text-2xl font-bold text-white mb-4">Smart Handling</h3>
                         <p className="text-gray-400 leading-relaxed mb-6 text-sm">From inbound to outbound, our expert team ensures fast processing and accurate tracking.</p>
                    </div>
                     <div className="absolute right-0 top-0 bottom-0 w-3/4">
                        {/* Gradient Overlay for smooth blend */}
                        <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-dark via-transparent to-transparent"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                            alt="Smart Handling" 
                            className="w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-8 right-8 text-6xl font-bold text-white/10 z-10">02</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};