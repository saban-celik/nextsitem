//src\components\ui\PopulerMovies.tsx
import { useEffect, useState } from 'react';
import { popularMovies } from '../../data/data';

interface PopulerMoviesProps {
  searchTerm: string;
}

const PopulerMovies = ({ searchTerm }: PopulerMoviesProps) => {
  const [startIndex, setStartIndex] = useState(0);

  const filteredMovies = popularMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => {
        if (prevIndex + 5 >= filteredMovies.length) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 10000);
    return () => clearInterval(interval);
  }, [filteredMovies.length]);

  const handlePrev = () => {
    setStartIndex((prevIndex) => {
      if (prevIndex === 0) {
        return filteredMovies.length - 5;
      }
      return prevIndex - 1;
    });
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => {
      if (prevIndex + 5 >= filteredMovies.length) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const visibleMovies = filteredMovies.slice(startIndex, startIndex + 5);

  return (
    <div className="movie-content">
      <div className="movie-slider">
        <button className="slider-btn prev-btn" onClick={handlePrev}>
          &lt;
        </button>
        <div className="movie-grid">
          {visibleMovies.length > 0 ? (
            visibleMovies.map((movie, index) => (
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
            ))
          ) : (
            <p>Aradığınız popüler filme uygun sonuç bulunamadı.</p>
          )}
        </div>
        <button className="slider-btn next-btn" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default PopulerMovies;