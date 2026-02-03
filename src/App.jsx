import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import CookiePolicy from './pages/CookiePolicy';
import Accessibility from './pages/Accessibility';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
function App() {
  return (
    <div className="app bg-neutral-950 min-h-screen text-white">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

          {/* Dynamic Service & Solution Pages */}
          <Route path="/services/:id" element={<ServicePage />} />
          <Route path="/solutions/:id" element={<ServicePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
