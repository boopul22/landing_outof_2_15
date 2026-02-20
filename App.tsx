import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import InsuranceChat from './components/InsuranceChat';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import ComplaintsProcedure from './pages/ComplaintsProcedure';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/complaints-procedure" element={<ComplaintsProcedure />} />
        </Routes>
      </main>
      <Footer />
      <InsuranceChat />
    </div>
  );
};

export default App;