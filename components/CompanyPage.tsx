import React from 'react';
import { Users, Target, Award, ArrowRight } from 'lucide-react';

export const CompanyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
       {/* Minimal Hero */}
       <div className="bg-brand-dark pt-32 pb-20 px-4">
           <div className="max-w-7xl mx-auto text-center">
               <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Building the Future of Logistics</h1>
               <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                   At LogiXpress, we are more than just a shipping company. We are architects of global trade, connecting businesses and communities through seamless supply chain solutions.
               </p>
           </div>
       </div>

       {/* Our Story */}
       <div className="max-w-7xl mx-auto px-4 py-24">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                   <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2664&q=80" 
                    alt="Corporate Meeting" 
                    className="rounded-2xl shadow-2xl"
                   />
               </div>
               <div>
                   <h4 className="text-brand-orange font-bold uppercase tracking-wider mb-2">Our Story</h4>
                   <h2 className="text-4xl font-bold text-brand-dark mb-6">From Local Courier to Global Leader</h2>
                   <p className="text-gray-600 mb-6 leading-relaxed">
                       Founded in 2005, LogiXpress began with a single truck and a vision to simplify logistics. Over the past two decades, we've grown into a multinational powerhouse, leveraging cutting-edge technology and a network of dedicated professionals to deliver excellence.
                   </p>
                   <p className="text-gray-600 mb-8 leading-relaxed">
                       Our commitment to innovation and sustainability drives us forward. We are constantly evolving to meet the complex demands of the modern world, ensuring that your cargo arrives safely, on time, every time.
                   </p>
                   <button className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold hover:bg-brand-orange transition-colors">
                       Meet the Team
                   </button>
               </div>
           </div>
       </div>

       {/* Mission & Vision */}
       <div className="bg-gray-50 py-24">
           <div className="max-w-7xl mx-auto px-4">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100">
                       <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                           <Target className="w-7 h-7" />
                       </div>
                       <h3 className="text-2xl font-bold text-brand-dark mb-4">Our Mission</h3>
                       <p className="text-gray-600 leading-relaxed">
                           To empower global trade by providing the most reliable, efficient, and innovative logistics solutions, creating value for our customers and partners.
                       </p>
                   </div>
                   <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100">
                       <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6">
                           <Award className="w-7 h-7" />
                       </div>
                       <h3 className="text-2xl font-bold text-brand-dark mb-4">Our Values</h3>
                       <p className="text-gray-600 leading-relaxed">
                           Integrity, Excellence, and Customer-Centricity. We believe in doing the right thing, exceeding expectations, and putting our clients first.
                       </p>
                   </div>
                   <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100">
                       <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
                           <Users className="w-7 h-7" />
                       </div>
                       <h3 className="text-2xl font-bold text-brand-dark mb-4">Our People</h3>
                       <p className="text-gray-600 leading-relaxed">
                           Our diverse team of logistics experts, drivers, and support staff is the backbone of our success. We invest in their growth and safety.
                       </p>
                   </div>
               </div>
           </div>
       </div>

       {/* Team Teaser */}
       <div className="max-w-7xl mx-auto px-4 py-24 text-center">
            <h2 className="text-4xl font-bold text-brand-dark mb-12">Executive Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    {name: "Sarah Jenkins", role: "CEO", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"},
                    {name: "David Chen", role: "COO", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"},
                    {name: "Elena Rodriguez", role: "Head of Operations", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"},
                    {name: "Michael Ross", role: "Global Strategy", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                ].map((member, i) => (
                    <div key={i} className="group">
                        <div className="relative overflow-hidden rounded-xl mb-4">
                            <img src={member.img} alt={member.name} className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                                <div className="text-white flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-xs font-bold cursor-pointer">in</div>
                                    <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-xs font-bold cursor-pointer">tw</div>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark">{member.name}</h3>
                        <p className="text-brand-orange text-sm font-medium">{member.role}</p>
                    </div>
                ))}
            </div>
       </div>
    </div>
  );
};