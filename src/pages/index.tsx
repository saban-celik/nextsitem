// src\pages\index.tsx
import { useState } from 'react';
import AdManager from '../components/ads/AdManager';
import MainLayout from '../components/layouts/MainLayout';
import MovieManager from '../components/managers/MovieManager';
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/Navbar';
import SecondaryNavbar from '../components/ui/SecondaryNavbar';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <MainLayout>
      <div className="page-wrapper">
        <div className="container">
          <Navbar onSearch={handleSearch} />
          <SecondaryNavbar />
          <MovieManager searchTerm={searchTerm} />
          <AdManager />
          <Footer />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;