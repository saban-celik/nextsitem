// src/pages/index.tsx
import { useState } from 'react';
import AdManager from '../components/ads/AdManager';
import MainLayout from '../components/layouts/MainLayout';
import MovieManager from '../components/managers/MovieManager';
import ContactModal from '../components/ui/ContactModal';
import Footer from '../components/ui/Footer';
import LoginModal from '../components/ui/LoginModal';
import Navbar from '../components/ui/Navbar';
import SecondaryNavbar from '../components/ui/SecondaryNavbar';
import SignupModal from '../components/ui/SignupModal';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const toggleSignup = () => {
    setIsSignupOpen(!isSignupOpen);
    setIsLoginOpen(false);
    setIsContactOpen(false);
  };

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
    setIsSignupOpen(false);
    setIsContactOpen(false);
  };

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
    setIsSignupOpen(false);
    setIsLoginOpen(false);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <MainLayout>
      <div className="page-wrapper">
        <div className="container">
          <Navbar 
            onSearch={handleSearch} 
            onToggleSignup={toggleSignup} 
            onToggleLogin={toggleLogin} 
          />
          <SecondaryNavbar 
            onCategorySelect={handleCategorySelect} 
            onToggleContact={toggleContact} 
          />
          <MovieManager searchTerm={searchTerm} selectedCategory={selectedCategory} />
          <AdManager />
          <Footer />
        </div>
      </div>
      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </MainLayout>
  );
};

export default Home;