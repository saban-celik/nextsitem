//src\components\ui\MovieGenres.tsx
import { FaFilm } from 'react-icons/fa';

const MovieGenres = () => {
  const genres = [
    'Aile', 'Aksiyon', 'Animasyon', 'Belgesel', 'Bilim Kurgu', 'Biyografi', 'Dram',
    'Editör', 'Fantastik', 'Gençlik', 'Genel', 'Gerilim', 'Gizem', 'Komedi',
    'Korku', 'Macera', 'Müzik', 'Müzikal', 'Polisiye', 'Romantik', 'Savaş',
    'Spor', 'Suç', 'Tarih', 'Western & Kovboy', 'Yerli'
  ];

  return (
    <div className="genres-bar">
      <div className="genres-title">
        <FaFilm /> Film Türleri
      </div>
      <ul className="genres-list row">
        {genres.map((genre, index) => (
          <li key={index} className="genre-item col-6">
            <a
              href={`/kategori/${genre.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
              className="genre-link"
            >
              {genre}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieGenres;