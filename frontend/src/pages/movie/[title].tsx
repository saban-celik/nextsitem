// src/pages/movie/[title].tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import ContactModal from '../../components/ui/ContactModal';
import Footer from '../../components/ui/Footer';
import LoginModal from '../../components/ui/LoginModal';
import MovieDetails from '../../components/ui/MovieDetails';
import Navbar from '../../components/ui/Navbar';
import SignupModal from '../../components/ui/SignupModal';

const MoviePage = () => {
  const router = useRouter();
  const { title, src, description, type, videoUrl } = router.query;

  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    console.log('Router Query:', router.query);
  }, [router.query]);

  if (!router.isReady) {
    return <p>Yükleniyor...</p>;
  }

  if (!title || !src || !description || !type) {
    console.error('Eksik temel query parametreleri:', { title, src, description, type, videoUrl });
    return <p>Eksik veri, lütfen tekrar deneyin.</p>;
  }

  const movie = {
    title: title as string,
    src: src as string,
    description: description as string,
    type: type as string,
    videoUrl: videoUrl ? (videoUrl as string) : 'https://www.youtube.com/embed/dQw4w9WgXcQ',
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

  const handleSearch = (searchTerm: string) => {
    console.log('Arama terimi:', searchTerm);
    // Arama mantığını buraya ekleyebilirsin, örneğin router.push ile bir arama sayfasına yönlendirme
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
          <MovieDetails movie={movie} onToggleLogin={toggleLogin} />
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