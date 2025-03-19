// src/pages/index.tsx
import { useState } from 'react';
import AdManager from '../components/ads/AdManager';
import MainLayout from '../components/layouts/MainLayout';
import MovieManager from '../components/managers/MovieManager';
import Footer from '../components/ui/Footer';
import LoginModal from '../components/ui/LoginModal';
import Navbar from '../components/ui/Navbar';
import SecondaryNavbar from '../components/ui/SecondaryNavbar';
import SignupModal from '../components/ui/SignupModal';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const toggleSignup = () => {
    setIsSignupOpen(!isSignupOpen);
    setIsLoginOpen(false); // Diğer modal'ı kapat
  };

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
    setIsSignupOpen(false); // Diğer modal'ı kapat
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
          <SecondaryNavbar />
          <MovieManager searchTerm={searchTerm} />
          <AdManager />
          <Footer />
        </div>
      </div>
      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </MainLayout>
  );
};

export default Home;