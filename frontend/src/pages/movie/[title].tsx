import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getMovieByTitle } from '../../api/backendApi';
import MainLayout from '../../components/layouts/MainLayout';
import ContactModal from '../../components/ui/ContactModal';
import Footer from '../../components/ui/Footer';
import LoginModal from '../../components/ui/LoginModal';
import MovieDetails from '../../components/ui/MovieDetails';
import Navbar from '../../components/ui/Navbar';
import SignupModal from '../../components/ui/SignupModal';

const MoviePage = () => {
  const router = useRouter();
  const { title } = router.query;
  const [movie, setMovie] = useState<any>(null);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    if (router.isReady && title) {
      const fetchMovie = async () => {
        try {
          const data = await getMovieByTitle(title as string);
          setMovie(data);
        } catch (error) {
          console.error('Film yüklenirken hata oluştu:', error);
        }
      };
      fetchMovie();
    }
  }, [router.isReady, title]);

  if (!router.isReady || !movie) {
    return <p>Yükleniyor...</p>;
  }

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