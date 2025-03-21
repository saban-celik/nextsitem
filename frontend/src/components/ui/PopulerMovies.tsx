// src/components/ui/PopulerMovies.tsx
import Image from 'next/image'; // next/image eklendi
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { popularMovies } from '../../data/data';

interface PopulerMoviesProps {
  searchTerm: string;
  category: string;
}

const PopulerMovies = ({ searchTerm, category }: PopulerMoviesProps) => {
  const [startIndex, setStartIndex] = useState(0);
  const router = useRouter();

  const filteredMovies = popularMovies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === 'all' || movie.type === category)
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

  const handleMovieClick = (movie: typeof popularMovies[0]) => {
    console.log('Tıklanan popüler film:', movie);
    router.push({
      pathname: `/movie/${encodeURIComponent(movie.title)}`,
      query: {
        title: movie.title,
        src: movie.src,
        description: movie.description,
        type: movie.type,
        videoUrl: movie.videoUrl,
      },
    });
  };

  const visibleMovies = filteredMovies.slice(startIndex, startIndex + 5);

  return (
    <div className="movie-content">
      <div className="movie-slider">
        <button className="slider-btn prev-btn" onClick={handlePrev}>
          {'<'}
        </button>
        <div className="movie-grid">
          {visibleMovies.length > 0 ? (
            visibleMovies.map((movie, index) => (
              <div
                className="movie-card"
                key={index + startIndex}
                onClick={() => handleMovieClick(movie)}
                style={{ cursor: 'pointer' }}
              >
                <div className="movie-thumbnail-wrapper">
                  <Image
                    className="movie-thumbnail"
                    src={movie.src}
                    alt={`${movie.title} posteri`}
                    width={200} // Örnek genişlik
                    height={300} // Örnek yükseklik
                  />
                </div>
                <div className="movie-info">
                  <h2 className="movie-title">{movie.title}</h2>
                  <p className="movie-description">{movie.description} - {movie.type}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Aradığınız popüler filme uygun sonuç bulunamadı.</p>
          )}
        </div>
        <button className="slider-btn next-btn" onClick={handleNext}>
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default PopulerMovies;