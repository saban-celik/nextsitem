import { useEffect, useState } from 'react';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear()); // Varsayılan yıl

  useEffect(() => {
    setYear(new Date().getFullYear()); // İstemci tarafında yılı güncelle
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          © {year} 4KFilmizlesene. Tüm Hakları Saklıdır.
        </p>
        <p>
          İletişim Adresi: <a href="mailto:4kfilmizlesene@proton.me">4kfilmizlesene@proton.me</a>
        </p>
        <nav className="footer-links">
          <a href="/film-izle">Film İzle</a> | 
          <a href="/filmi-izle">Filmi İzle</a> | 
          <a href="/hakkimizda">Kısaca Dünden Bugüne Film</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;