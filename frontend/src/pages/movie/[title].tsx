import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import ContactModal from '../../components/ui/ContactModal';
import Footer from '../../components/ui/Footer';
import LoginModal from '../../components/ui/LoginModal';
import MovieDetails from '../../components/ui/MovieDetails';
import Navbar from '../../components/ui/Navbar';
import SignupModal from '../../components/ui/SignupModal';
import { allMovies, Movie } from '../../data/data';

const MoviePage = () => {
  const router = useRouter();
  const { title } = router.query;
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (router.isReady && title) {
      const foundMovie = allMovies.find(
        (m) => m.title.toLowerCase() === (title as string).toLowerCase()
      );
      setMovie(foundMovie || null);
    }
  }, [router.isReady, title]);

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

  if (!router.isReady || !movie) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <MainLayout>
      <div className="page-wrapper">
        <div className="container">
          <Navbar
            onSearch={handleSearch}
            onToggleSignup={toggleSignup}
            onToggleLogin={toggleLogin}
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