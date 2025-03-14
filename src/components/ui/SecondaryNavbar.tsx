// src/components/ui/SecondaryNavbar.tsx
import { FaEnvelope } from 'react-icons/fa'; // Sadece FaEnvelope kaldı
import '../../assets/styles/globals.css';

const SecondaryNavbar = () => {
  return (
    <nav className="secondary-navbar">
      <div className="secondary-navbar__container">
        <button className="secondary-navbar__button">
          Film İzle {/* İkon kaldırıldı */}
        </button>
        <button className="secondary-navbar__button">
          Türkçe Dublaj Filmler
        </button>
        <button className="secondary-navbar__button">
          Türkçe Altyazılı Filmler
        </button>
        <button className="secondary-navbar__button">
          <FaEnvelope className="secondary-navbar__icon" />
          İletişim
        </button>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;