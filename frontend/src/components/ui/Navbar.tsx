// src/components/ui/Navbar.tsx
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaBars, FaLock, FaSearch, FaUserPlus } from 'react-icons/fa';
import { colors } from '../../assets/styles/colors';

interface NavbarProps {
  onSearch: (searchTerm: string) => void;
  onToggleSignup: () => void; // Modal için yeni prop
  onToggleLogin: () => void;  // Modal için yeni prop
}

const Navbar = ({ onSearch, onToggleSignup, onToggleLogin }: NavbarProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    Object.entries(colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    if (loggedIn) {
      setUsername(localStorage.getItem('username') || '');
    }
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

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername('');
    router.push('/');
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
          {isLoggedIn ? (
            <>
              <span className="navbar__action-text" style={{ color: 'var(--lightGray)' }}>
                Hoş geldin, {username}
              </span>
              <button className="navbar__action-btn" onClick={handleLogout}>
                <FaLock className="navbar__action-icon" />
                <span className="navbar__action-text">Çıkış Yap</span>
              </button>
            </>
          ) : (
            <>
              <button className="navbar__action-btn" onClick={onToggleSignup}>
                <FaUserPlus className="navbar__action-icon" />
                <span className="navbar__action-text">Kayıt Ol</span>
              </button>
              <button className="navbar__action-btn" onClick={onToggleLogin}>
                <FaLock className="navbar__action-icon" />
                <span className="navbar__action-text">Giriş Yap</span>
              </button>
            </>
          )}
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
          {isLoggedIn ? (
            <>
              <span style={{ color: 'var(--lightGray)', textAlign: 'center' }}>
                Hoş geldin, {username}
              </span>
              <button className="navbar__slider-btn" onClick={handleLogout}>
                <FaLock className="navbar__action-icon" />
                Çıkış Yap
              </button>
            </>
          ) : (
            <>
              <button className="navbar__slider-btn" onClick={onToggleSignup}>
                <FaUserPlus className="navbar__action-icon" />
                Kayıt Ol
              </button>
              <button className="navbar__slider-btn" onClick={onToggleLogin}>
                <FaLock className="navbar__action-icon" />
                Giriş Yap
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
