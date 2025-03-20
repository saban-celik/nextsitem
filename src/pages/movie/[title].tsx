// src/pages/movie/[title].tsx
import { useRouter } from 'next/router';
import MovieDetails from '../../components/ui/MovieDetails';
import MainLayout from '../../components/layouts/MainLayout';
import Navbar from '../../components/ui/Navbar';
import SecondaryNavbar from '../../components/ui/SecondaryNavbar';
import Footer from '../../components/ui/Footer';
import { useState, useEffect } from 'react';
import ContactModal from '../../components/ui/ContactModal';
import SignupModal from '../../components/ui/SignupModal';
import LoginModal from '../../components/ui/LoginModal';

const MoviePage = () => {
  const router = useRouter();
  const { title, src, description, type, videoUrl } = router.query;

  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    console.log('Router Query:', router.query);
  }, [router.query]);

  if (!router.isReady) {
    return <p>Yükleniyor...</p>;
  }

  // Temel parametreler eksikse hata göster, ama videoUrl opsiyonel
  if (!title || !src || !description || !type) {
    console.error('Eksik temel query parametreleri:', { title, src, description, type, videoUrl });
    return <p>Eksik veri, lütfen tekrar deneyin.</p>;
  }

  const movie = {
    title: title as string,
    src: src as string,
    description: description as string,
    type: type as string,
    videoUrl: videoUrl ? (videoUrl as string) : 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Varsayılan URL
  };

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
          <MovieDetails movie={movie} />
          <Footer />
        </div>
      </div>
      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </MainLayout>
  );
};

export default MoviePage;