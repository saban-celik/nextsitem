// src/pages/index.tsx
import AdManager from '../components/ads/AdManager';
import MainLayout from '../components/layouts/MainLayout';
import MovieManager from '../components/managers/MovieManager';
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/Navbar';
import SecondaryNavbar from '../components/ui/SecondaryNavbar';

const Home = () => {
  return (
    <MainLayout>
      <div className="page-wrapper">
        <div className="container">
          <Navbar />
          <SecondaryNavbar />
          <MovieManager/>
          <AdManager />
          <Footer/>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
