import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaBars, FaLock, FaSearch, FaUserPlus } from 'react-icons/fa';
import { colors } from '../../assets/styles/colors';

interface NavbarProps {
  onSearch: (searchTerm: string) => void;
}

const Navbar = ({ onSearch }: NavbarProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    Object.entries(colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <button className="navbar__menu-btn" onClick={toggleMenu}>
          <FaBars />
        </button>
        <div className="navbar__title">
          <Image
            src="/images/4kfilmizlesene.png"
            alt="4K Film İzlesene Logo"
            width={180}
            height={60}
          />
        </div>
        <div className="navbar__search-wrapper">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Ara..."
              className="navbar__search-input form-control"
              onChange={handleSearchChange}
            />
            <FaSearch className="search-icon" onClick={toggleSearch} />
          </div>
        </div>
        <div className="navbar__actions">
          <button className="navbar__action-btn">
            <FaUserPlus className="navbar__action-icon" />
            <span className="navbar__action-text">Kaydol</span>
          </button>
          <button className="navbar__action-btn">
            <FaLock className="navbar__action-icon" />
            <span className="navbar__action-text">Giriş Yap</span>
          </button>
        </div>
      </div>
      {isSearchOpen && (
        <div className="mobile-search-wrapper">
          <input
            type="text"
            placeholder="Ara..."
            className="navbar__search-input form-control"
            onChange={handleSearchChange}
          />
        </div>
      )}
      {isMenuOpen && (
        <div className="navbar__menu-slider">
          <button className="navbar__slider-btn">
            <FaUserPlus className="navbar__action-icon" />
            Kaydol
          </button>
          <button className="navbar__slider-btn">
            <FaLock className="navbar__action-icon" />
            Giriş Yap
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;