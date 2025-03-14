// src/components/ui/MovieList.tsx
import { useEffect, useState } from 'react';

const PopulerMovies = () => {
  // Film listesini artırıyorum
  const movies = [
    {
      src: 'https://www.hdfilmcehennemi.nl/images/list/cover/the-one-and-only-ivan-hd-film-izle-hdf5.webp',
      title: 'The One and Only Ivan',
      description: '2020',
    },
    {
      src: 'https://www.hdfilmcehennemi.nl/images/list/cover/hagen.webp',
      title: 'Hagen',
      description: '2014',
    },
    {
      src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/915bfbe658455df1d34dcf276dbcead1-210x315.jpg',
      title: 'Under the Skin',
      description: '2013',
    },
    {
      src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/6866a6437090ee02e7475fcb0d61134a-210x315.jpg',
      title: 'X',
      description: '2022',
    },
    {
      src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/315d4b1f6de29923485dc2dcc4eca536-210x315.jpg',
      title: 'The Witches',
      description: '2020',
    },
    {
      src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/48cd5c783c4bba1791992b42d6d2a0f7-210x315.jpg',
      title: 'The Batman',
      description: '2022',
    },
    {
      src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/a140cd5946b695ae6a949ccdc6f632b7-210x315.jpg',
      title: 'Dune',
      description: '2021',
    },
    {
      src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/10/a7f55a5047704870f7758c429c99468f-210x315.jpg',
      title: 'Inception',
      description: '2010',
    },
    {
      src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2023/10/a80eb7a53a39eb2c32f15ac091a5cfa0-210x315.jpg',
      title: 'Interstellar',
      description: '2014',
    },
    {
      src: 'https://www.4kfilmizlesene.org/wp-content/uploads/2023/10/25182e942f145fbea9947458cd5e5d67-210x315.jpg',
      title: 'Mad Max: Fury Road',
      description: '2015',
    },
  ];
  const [startIndex, setStartIndex] = useState(0);

  // Otomatik kaydırma
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => {
        if (prevIndex + 5 >= movies.length) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 10000); // 10 saniye

    return () => clearInterval(interval);
  }, [movies.length]);

  // Manuel kaydırma fonksiyonları
  const handlePrev = () => {
    setStartIndex((prevIndex) => {
      if (prevIndex === 0) {
        return movies.length - 5; // Son 5 filme git
      }
      return prevIndex - 1;
    });
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => {
      if (prevIndex + 5 >= movies.length) {
        return 0; // Başa dön
      }
      return prevIndex + 1;
    });
  };

  // Görünen 5 filmi seçme
  const visibleMovies = movies.slice(startIndex, startIndex + 5);

  return (
    <div className="movie-content">
      <div className="movie-slider">
        <button className="slider-btn prev-btn" onClick={handlePrev}>
          &lt;
        </button>
        <div className="movie-grid">
          {visibleMovies.map((movie, index) => (
            <div className="movie-card" key={index + startIndex}>
              <div className="movie-thumbnail-wrapper">
                <img
                  className="movie-thumbnail"
                  src={movie.src}
                  alt={`${movie.title} poster`}
                />
              </div>
              <div className="movie-info">
                <h2 className="movie-title">{movie.title}</h2>
                <p className="movie-description">{movie.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-btn next-btn" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default PopulerMovies;