import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Clock, ChevronLeft, ChevronRight, Facebook, Twitter, Linkedin, Share2 } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  content: React.ReactNode;
}

export const BlogPage: React.FC = () => {
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Mock Data
  const allPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of AI in Supply Chain Management",
      excerpt: "How artificial intelligence is revolutionizing route optimization and inventory forecasting in 2025.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      date: "Oct 24, 2025",
      author: "Alex Morgan",
      category: "Technology",
      readTime: "5 min read",
      content: (
        <>
            <p className="mb-6">Artificial Intelligence is no longer just a buzzword; it is the driving force behind the next generation of logistics. From predictive analytics that forecast demand surges to autonomous drones making last-mile deliveries, AI is reshaping how we think about supply chains.</p>
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Predictive Analytics</h3>
            <p className="mb-6">One of the most significant impacts of AI is in predictive analytics. By analyzing vast amounts of historical data, AI algorithms can predict demand with unprecedented accuracy. This allows warehouses to stock inventory more efficiently, reducing holding costs and minimizing stockouts.</p>
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Route Optimization</h3>
            <p className="mb-6">Gone are the days of static routing. AI-powered systems now analyze real-time traffic data, weather conditions, and delivery windows to optimize routes dynamically. This not only saves fuel but also ensures faster delivery times for end customers.</p>
            <blockquote className="border-l-4 border-brand-orange pl-6 italic text-gray-700 text-lg mb-6">
                "The integration of AI in logistics is not about replacing humans, but empowering them to make smarter, faster decisions."
            </blockquote>
            <p>As we move forward into 2026, we can expect even greater integration of AI technologies, making supply chains more resilient, efficient, and transparent than ever before.</p>
        </>
      )
    },
    {
      id: 2,
      title: "Sustainable Shipping: Reducing Carbon Footprint",
      excerpt: "Exploring new green technologies and practices that are making the logistics industry more eco-friendly.",
      image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2041&q=80",
      date: "Oct 18, 2025",
      author: "Sarah Jenkins",
      category: "Sustainability",
      readTime: "4 min read",
      content: (
        <>
            <p className="mb-6">Sustainability is moving from a corporate social responsibility goal to a core operational requirement. The logistics industry, traditionally a heavy contributor to carbon emissions, is undergoing a green revolution.</p>
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Electric Fleets</h3>
            <p className="mb-6">Major logistics companies are transitioning their local delivery fleets to electric vehicles (EVs). With improvements in battery range and charging infrastructure, EVs are becoming a viable option for last-mile delivery, significantly reducing urban pollution.</p>
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Green Warehousing</h3>
            <p className="mb-6">Warehouses are also going green. From solar panels on rooftops to energy-efficient LED lighting and smart climate control systems, facilities are reducing their energy consumption. Some are even aiming for net-zero carbon status by 2030.</p>
            <p>Customers are increasingly demanding sustainable shipping options. By adopting these practices, companies not only help the planet but also gain a competitive edge in the market.</p>
        </>
      )
    },
    {
      id: 3,
      title: "Global Trade Regulations Update: What You Need to Know",
      excerpt: "A comprehensive guide to the latest customs changes affecting international shipments this quarter.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      date: "Oct 10, 2025",
      author: "David Chen",
      category: "Regulations",
      readTime: "6 min read",
      content: <p>Detailed analysis of new trade agreements and tariff changes...</p>
    },
    {
      id: 4,
      title: "Top 5 Warehousing Trends for 2026",
      excerpt: "From robotics to micro-fulfillment centers, discover the trends shaping the future of storage.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      date: "Sep 28, 2025",
      author: "Elena Rodriguez",
      category: "Warehousing",
      readTime: "5 min read",
      content: <p>Exploring the shift towards automation and closer-to-customer storage hubs...</p>
    },
    {
      id: 5,
      title: "Navigating Port Congestion During Peak Season",
      excerpt: "Strategies to ensure your cargo arrives on time despite global supply chain bottlenecks.",
      image: "https://images.unsplash.com/photo-1494412574643-35d324688b91?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      date: "Sep 15, 2025",
      author: "Michael Ross",
      category: "Logistics",
      readTime: "4 min read",
      content: <p>Tips for early booking and alternative routing strategies...</p>
    },
    {
      id: 6,
      title: "The Rise of E-commerce Fulfillment Services",
      excerpt: "How 3PL providers are adapting to the exploding demand for rapid online order delivery.",
      image: "https://images.unsplash.com/photo-1566576912906-2532f6b3db58?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      date: "Sep 02, 2025",
      author: "Alex Morgan",
      category: "E-commerce",
      readTime: "5 min read",
      content: <p>The impact of same-day delivery expectations on fulfillment networks...</p>
    },
    {
      id: 7,
      title: "Blockchain in Logistics: Hype vs Reality",
      excerpt: "Understanding the true potential of blockchain technology for transparency and security.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2232&q=80",
      date: "Aug 28, 2025",
      author: "Sarah Jenkins",
      category: "Technology",
      readTime: "7 min read",
      content: <p>De-mystifying the ledger technology and its practical applications...</p>
    },
    {
      id: 8,
      title: "Cold Chain Logistics: Keeping it Cool",
      excerpt: "Best practices for shipping temperature-sensitive pharmaceuticals and food products.",
      image: "https://images.unsplash.com/photo-1587593810167-a649254a47ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      date: "Aug 15, 2025",
      author: "David Chen",
      category: "Logistics",
      readTime: "5 min read",
      content: <p>Maintaining integrity from factory to fridge...</p>
    }
  ];

  // Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // View: Single Post Detail
  if (selectedPostId) {
    const post = allPosts.find(p => p.id === selectedPostId);
    if (!post) return null;

    return (
        <div className="min-h-screen bg-white animate-fade-in">
            {/* Detail Header */}
            <div className="relative h-[50vh] min-h-[400px]">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <span className="inline-block bg-brand-orange text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center justify-center gap-6 text-gray-300 text-sm">
                            <span className="flex items-center gap-2"><User className="w-4 h-4" /> {post.author}</span>
                            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
                            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="max-w-3xl mx-auto px-4 py-20">
                <button 
                    onClick={() => setSelectedPostId(null)}
                    className="flex items-center text-gray-500 hover:text-brand-orange transition-colors mb-8 font-medium"
                >
                    <ChevronLeft className="w-5 h-5 mr-1" /> Back to Articles
                </button>

                <div className="prose prose-lg prose-gray max-w-none">
                    {post.content}
                    {/* Fallback content for items without full text defined */}
                    {typeof post.content === 'string' && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>}
                </div>

                {/* Share & Tags Footer */}
                <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 text-gray-500 font-medium">
                        <Share2 className="w-5 h-5" /> Share this article
                    </div>
                    <div className="flex gap-4">
                        <button className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></button>
                        <button className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-sky-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></button>
                        <button className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-blue-700 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
  }

  // View: Blog List
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-brand-dark pt-32 pb-20 px-4 text-center border-b border-gray-800">
         <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Latest Insights & News</h1>
         <p className="text-gray-400 max-w-2xl mx-auto text-lg">
             Stay updated with the latest trends, tips, and industry news from the world of logistics and supply chain management.
         </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post) => (
                  <article 
                    key={post.id} 
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col h-full cursor-pointer"
                    onClick={() => { setSelectedPostId(post.id); window.scrollTo({top: 0, behavior: 'smooth'}); }}
                  >
                      <div className="relative h-60 overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute top-4 left-4 bg-brand-orange text-white text-xs font-bold uppercase px-3 py-1 rounded-full z-10">
                              {post.category}
                          </div>
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                          <div className="flex items-center text-xs text-gray-500 mb-4 gap-4">
                              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                          </div>
                          <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">
                              {post.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                              {post.excerpt}
                          </p>
                          <span className="inline-flex items-center text-brand-orange font-bold text-sm uppercase tracking-wider hover:gap-2 transition-all mt-auto">
                              Read Article <ArrowRight className="w-4 h-4 ml-1" />
                          </span>
                      </div>
                  </article>
              ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-16 gap-2">
                <button 
                    onClick={() => paginate(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="w-10 h-10 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 flex items-center justify-center font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>
                
                {Array.from({ length: totalPages }).map((_, idx) => (
                    <button 
                        key={idx}
                        onClick={() => paginate(idx + 1)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                            currentPage === idx + 1 
                            ? 'bg-brand-orange text-white shadow-lg shadow-orange-500/30' 
                            : 'border border-gray-200 text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                        {idx + 1}
                    </button>
                ))}

                <button 
                    onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 flex items-center justify-center font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
          )}
      </div>
    </div>
  );
};