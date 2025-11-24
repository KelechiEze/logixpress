import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import { TrackingPage } from './components/TrackingPage';
import { ServicesPage } from './components/ServicesPage';
import { CompanyPage } from './components/CompanyPage';
import { BlogPage } from './components/BlogPage';
import { Footer } from './components/Footer';
import { GlobalNetwork, Testimonials, CTASection } from './components/HomeSections';

// A simple Hash Router implementation
const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setCurrentPage(hash || 'home');
    };

    window.addEventListener('hashchange', handleHashChange);
    // Set initial page
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: string) => {
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col font-sans">
      <Navbar onNavigate={navigate} currentPage={currentPage} />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={navigate} />
            <Features />
            <GlobalNetwork />
            <About />
            <Testimonials />
            <CTASection onNavigate={navigate} />
          </>
        )}
        {currentPage === 'track' && <TrackingPage />}
        {currentPage === 'service' && <ServicesPage />}
        {currentPage === 'company' && <CompanyPage />}
        {currentPage === 'blog' && <BlogPage />}
      </main>

      <Footer />
    </div>
  );
};

export default App;