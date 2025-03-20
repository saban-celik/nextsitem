// src/components/ui/SecondaryNavbar.tsx
import { FaEnvelope } from 'react-icons/fa';

interface SecondaryNavbarProps {
  onCategorySelect: (category: string) => void;
  onToggleContact: () => void;
}

const SecondaryNavbar = ({ onCategorySelect, onToggleContact }: SecondaryNavbarProps) => {
  const categories = [
    { label: 'Film İzle', value: 'all' },
    { label: 'Türkçe Dublaj Filmler', value: 'Türkçe Dublaj' },
    { label: 'Türkçe Altyazılı Filmler', value: 'Türkçe Altyazı' },
    { label: 'Orijinal', value: 'Orijinal' },
    { label: 'İletişim', value: 'contact', icon: <FaEnvelope className="secondary-navbar__icon" /> },
  ];

  const handleCategoryClick = (category: string) => {
    if (category === 'contact') {
      onToggleContact();
    } else {
      onCategorySelect(category);
    }
  };

  return (
    <nav className="secondary-navbar">
      <div className="secondary-navbar__container">
        {categories.map((category) => (
          <button
            key={category.value}
            className="secondary-navbar__button"
            onClick={() => handleCategoryClick(category.value)}
          >
            {category.icon}
            {category.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default SecondaryNavbar;