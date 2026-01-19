import React, { useState } from 'react';
import { Search, MapPin, Package, Truck, Calendar, ArrowRight, CheckCircle2, AlertTriangle, Box, Plane, Info, Globe, X, Scale, Layers, Check } from 'lucide-react';
import { getShipment } from '../services/mockData';
import { ShipmentData, Item } from '../types';

export const TrackingPage: React.FC = () => {
  const [trackingId, setTrackingId] = useState('');
  const [shipment, setShipment] = useState<ShipmentData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    
    setLoading(true);
    setError('');
    setSearched(true);
    setShipment(null);

    try {
      const data = await getShipment(trackingId.trim());
      if (data) {
        setShipment(data);
      } else {
        setError('Tracking ID not found. Please check your code (e.g., LX-55203941) and try again.');
      }
    } catch (err) {
      setError('An error occurred while tracking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'plane': return <Plane className="w-5 h-5" />;
      case 'truck': return <Truck className="w-5 h-5" />;
      case 'warehouse': return <Box className="w-5 h-5" />;
      case 'check': return <CheckCircle2 className="w-5 h-5" />;
      case 'alert-triangle': return <AlertTriangle className="w-5 h-5" />;
      default: return <Package className="w-5 h-5" />;
    }
  };

  const getStatusColor = (status: string) => {
      switch (status) {
          case 'Delivered': return 'bg-green-500 text-green-500';
          case 'Exception': return 'bg-red-500 text-red-500';
          case 'Pending': return 'bg-yellow-500 text-yellow-500';
          default: return 'bg-brand-orange text-brand-orange'; // In Transit
      }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
        case 'Delivered': return <div className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Delivered</div>;
        case 'Exception': return <div className="bg-red-500/20 text-red-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> Exception</div>;
        case 'Pending': return <div className="bg-yellow-500/20 text-yellow-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1"><Box className="w-3 h-3" /> Pending</div>;
        default: return <div className="bg-brand-orange/20 text-brand-orange px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1"><Truck className="w-3 h-3" /> In Transit</div>;
    }
  };

  const getCurrentLocation = (data: ShipmentData) => {
      if (!data.timeline || data.timeline.length === 0) return data.sender.location;
      const lastEvent = data.timeline[data.timeline.length - 1];
      return lastEvent.location;
  };

  return (
    <div className="min-h-screen bg-brand-gray pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Search Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Track Your Shipment</h1>
        <p className="text-gray-400 mb-8">Enter your unique tracking ID to see real-time updates.</p>
        
        <form onSubmit={handleTrack} className="relative max-w-2xl mx-auto group z-20">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-gray-500 group-focus-within:text-brand-orange transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-32 py-5 bg-[#222] border border-gray-700 rounded-full leading-5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all text-lg shadow-xl"
            placeholder="e.g., LX-55203941"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
          />
          <button
            type="submit"
            disabled={loading}
            className="absolute inset-y-2 right-2 px-8 bg-brand-orange text-white text-sm font-bold rounded-full hover:bg-orange-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? 'Searching...' : 'TRACK'}
            {!loading && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>
      </div>

      {/* Error State */}
      {error && (
        <div className="max-w-4xl mx-auto bg-red-500/10 border border-red-500/50 rounded-lg p-6 text-center text-red-200 mb-8 animate-pulse">
          <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-red-500" />
          <p>{error}</p>
        </div>
      )}

      {/* Results */}
      {shipment && (
        <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
          
          {/* Top Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#222] rounded-2xl p-6 border border-gray-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Package className="w-32 h-32 text-white" />
              </div>
              <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-3">Current Status</h3>
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-center gap-3">
                    <span className={`inline-block w-4 h-4 rounded-full shadow-[0_0_10px_currentColor] ${getStatusColor(shipment.currentStatus).split(' ')[0]} ${shipment.currentStatus === 'In Transit' ? 'animate-pulse-fast' : ''}`}></span>
                    <span className="text-3xl font-bold text-white">{shipment.currentStatus}</span>
                </div>
                {getStatusBadge(shipment.currentStatus)}
              </div>
              <p className="text-sm text-gray-400 border-t border-gray-800 pt-4 mt-2">
                  Est. Delivery: <span className="text-white font-semibold ml-1">{shipment.estimatedDelivery}</span>
              </p>
            </div>

            <div className="bg-[#222] rounded-2xl p-6 border border-gray-800 shadow-2xl md:col-span-2 flex flex-col justify-center">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative px-4 md:px-8">
                <div className="hidden md:block absolute left-20 right-20 top-[28px] h-0.5 bg-gray-800 -z-10">
                    <div 
                        className={`h-full bg-gradient-to-r from-brand-orange to-brand-orange transition-all duration-1000`} 
                        style={{ 
                            width: shipment.currentStatus === 'Delivered' ? '100%' : 
                                   shipment.currentStatus === 'In Transit' ? '60%' : 
                                   shipment.currentStatus === 'Exception' ? '40%' : '10%' 
                        }}
                    ></div>
                </div>

                <div className="flex flex-row md:flex-col items-center gap-4 md:gap-2 z-10 w-full md:w-auto">
                  <div className="w-14 h-14 rounded-full bg-gray-800 border-4 border-[#222] flex items-center justify-center text-gray-400 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="md:text-center">
                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">From</p>
                    <p className="text-white font-bold text-lg leading-tight">{shipment.sender.name}</p>
                    <p className="text-gray-400 text-sm">{shipment.sender.location}</p>
                  </div>
                </div>

                <div className="flex flex-row md:flex-col items-center gap-4 md:gap-2 z-10 w-full md:w-auto md:text-right">
                   <div className="md:order-2 w-14 h-14 rounded-full bg-brand-orange border-4 border-[#222] flex items-center justify-center text-white shadow-lg shadow-orange-900/50 flex-shrink-0 md:mx-auto">
                    <MapPin className="w-6 h-6" />
                  </div>
                   <div className="md:text-center md:order-1">
                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">To</p>
                    <p className="text-white font-bold text-lg leading-tight">{shipment.receiver.name}</p>
                    <p className="text-gray-400 text-sm">{shipment.receiver.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
               <div className="bg-[#222] rounded-2xl h-80 w-full overflow-hidden relative group border border-gray-800">
                 <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(getCurrentLocation(shipment))}&t=&z=10&ie=UTF8&iwloc=&output=embed`}
                    className="opacity-70 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                 ></iframe>
                 
                 <div className="absolute inset-0 bg-gradient-to-t from-[#222] via-transparent to-transparent pointer-events-none"></div>
                 
                 <div className="absolute top-4 right-4 z-10 pointer-events-none">
                     <span className="flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
                    </span>
                 </div>

                 <div className="absolute bottom-6 left-6 pointer-events-none">
                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                        <Globe className="w-5 h-5 text-brand-orange" />
                        Live Tracking Map
                    </h3>
                    <p className="text-gray-400 text-sm font-mono mt-1 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-brand-orange" />
                        {getCurrentLocation(shipment)}
                    </p>
                 </div>
               </div>

               <div className="bg-[#222] rounded-2xl p-8 border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-brand-orange" />
                      Shipment Progress
                  </h3>
                  <div className="relative border-l-2 border-gray-800 ml-3 space-y-10">
                    {shipment.timeline.map((event, index) => (
                        <div key={event.id} className="relative pl-10 group">
                            {/* Unique Tick Indicator */}
                            <div className={`absolute -left-[13px] top-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-500 z-10 ${event.completed ? 'bg-brand-orange border-brand-orange shadow-[0_0_15px_rgba(255,87,34,0.5)]' : 'bg-[#1a1a1a] border-gray-700'}`}>
                                {event.completed ? (
                                    <Check className="w-3.5 h-3.5 text-white stroke-[4px] animate-fade-in" />
                                ) : (
                                    <div className={`w-2 h-2 rounded-full ${index === shipment.timeline.findIndex(e => !e.completed) ? 'bg-brand-orange animate-pulse' : 'bg-gray-700'}`}></div>
                                )}
                            </div>
                            
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                                <div>
                                    <h4 className={`text-lg font-bold transition-colors duration-300 ${event.completed ? 'text-white' : 'text-gray-500'}`}>{event.status}</h4>
                                    <p className="text-gray-400 text-sm mt-1">{event.description}</p>
                                    <p className="text-brand-orange text-xs mt-1 font-mono uppercase tracking-widest">{event.location}</p>
                                </div>
                                <div className="text-right flex flex-row sm:flex-col items-center sm:items-end gap-2 sm:gap-0 mt-2 sm:mt-0">
                                     <div className={`p-2 rounded-lg inline-block mb-1 transition-all duration-300 ${event.completed ? 'bg-brand-orange/10 text-brand-orange scale-110 shadow-sm' : 'bg-transparent text-gray-700'}`}>
                                        {getIcon(event.icon)}
                                     </div>
                                    <p className="text-xs text-gray-500 font-mono whitespace-nowrap">{event.timestamp}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                  </div>
               </div>
            </div>

            <div className="space-y-8">
                <div className="bg-[#222] rounded-2xl p-6 border border-gray-800 sticky top-32">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800">
                        <h3 className="text-lg font-bold text-white">Shipment Details</h3>
                        <Info className="w-5 h-5 text-gray-600" />
                    </div>
                    
                    <div className="space-y-4">
                        <div className="flex justify-between items-center py-2">
                            <span className="text-gray-400 text-sm">Tracking ID</span>
                            <span className="text-brand-orange font-mono font-medium text-right">{shipment.trackingId}</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <span className="text-gray-400 text-sm">Service Type</span>
                            <span className="text-white font-medium text-right">{shipment.serviceType}</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <span className="text-gray-400 text-sm">Total Weight</span>
                            <span className="text-white font-medium text-right">{shipment.weight}</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <span className="text-gray-400 text-sm">Dimensions</span>
                            <span className="text-white font-medium text-right">{shipment.dimensions}</span>
                        </div>
                         <div className="flex justify-between items-center py-2">
                            <span className="text-gray-400 text-sm">Receiver Address</span>
                            <span className="text-white font-medium text-right text-xs max-w-[150px]">{shipment.receiver.address}</span>
                        </div>
                    </div>

                    <h4 className="text-white font-bold mt-8 mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                        <Box className="w-4 h-4 text-brand-orange" />
                        Package Contents
                    </h4>
                    <div className="space-y-3">
                        {shipment.items.map((item, idx) => (
                            <div 
                                key={idx} 
                                className="bg-gray-800/30 border border-gray-700/50 p-3 rounded-lg flex gap-4 items-center hover:bg-gray-800/50 transition-colors group cursor-pointer"
                                onClick={() => setSelectedItem(item)}
                            >
                                {item.image && (
                                    <div className="w-16 h-16 rounded-md overflow-hidden bg-white/5 flex-shrink-0 border border-gray-700">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                )}
                                <div className="flex-grow">
                                    <p className="text-white text-sm font-medium">{item.name}</p>
                                    <p className="text-xs text-gray-500">{item.category} • {item.weight}</p>
                                </div>
                                <div className="text-right flex flex-col items-end gap-1">
                                    <span className="bg-white/10 text-white px-2 py-1 rounded text-xs font-bold">x{item.quantity}</span>
                                    <Info className="w-4 h-4 text-gray-600 group-hover:text-brand-orange transition-colors" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        </div>
      )}
      
      {!shipment && searched && !loading && !error && (
         <div className="text-center py-20 animate-fade-in">
             <div className="inline-block p-6 rounded-full bg-[#222] border border-gray-800 mb-4">
                 <Search className="w-12 h-12 text-gray-600" />
             </div>
             <p className="text-gray-400 text-lg">Shipment details will appear here</p>
         </div>
      )}

      {/* Sleek Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300" 
                onClick={() => setSelectedItem(null)}
            ></div>
            
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden relative z-10 animate-fade-in-up">
                {/* Close Button */}
                <button 
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 bg-white/10 hover:bg-brand-orange text-white p-2 rounded-full transition-all z-20 group"
                >
                    <X className="w-5 h-5 group-hover:scale-110" />
                </button>

                {/* Hero Content */}
                <div className="relative h-64 overflow-hidden">
                    <img 
                        src={selectedItem.image || "https://images.unsplash.com/photo-1566576912906-2532f6b3db58?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80"} 
                        alt={selectedItem.name} 
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
                    <div className="absolute bottom-6 left-8">
                        <span className="bg-brand-orange text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-3 inline-block">
                            Product Detail
                        </span>
                        <h2 className="text-3xl font-bold text-white leading-tight">{selectedItem.name}</h2>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="p-8 space-y-8">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4 group hover:bg-white/10 transition-colors">
                            <div className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                                <Scale className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Weight</p>
                                <p className="text-white font-bold">{selectedItem.weight}</p>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4 group hover:bg-white/10 transition-colors">
                            <div className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                                <Layers className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Quantity</p>
                                <p className="text-white font-bold">x{selectedItem.quantity}</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-white/10">
                            <span className="text-gray-400 text-sm">Category</span>
                            <span className="text-white font-semibold">{selectedItem.category}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-white/10">
                            <span className="text-gray-400 text-sm">Status</span>
                            <span className="text-green-500 font-semibold flex items-center gap-1">
                                <CheckCircle2 className="w-4 h-4" /> Ready for Delivery
                            </span>
                        </div>
                    </div>

                    <div className="pt-2">
                        <button 
                            onClick={() => setSelectedItem(null)}
                            className="w-full bg-brand-orange text-white font-bold py-4 rounded-2xl hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group"
                        >
                            Return to Tracking <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};