// src\components\ui\Navbar.tsx
import Image from 'next/image';
import { useEffect } from 'react';
import { FaLock, FaSearch, FaUserPlus } from 'react-icons/fa';
import { colors } from '../../assets/styles/colors';

interface NavbarProps {
  onSearch: (searchTerm: string) => void;
}

const Navbar = ({ onSearch }: NavbarProps) => {
  useEffect(() => {
    Object.entries(colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
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
            <FaSearch className="search-icon" />
          </div>
        </div>
        <div className="navbar__actions">
          <button className="navbar__action-btn">
            <FaUserPlus className="navbar__action-icon" />
            Kaydol
          </button>
          <button className="navbar__action-btn">
            <FaLock className="navbar__action-icon" />
            Giriş Yap
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;