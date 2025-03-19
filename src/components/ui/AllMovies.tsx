// src/components/ui/AllMovies.tsx
import Image from 'next/image';
import { useState } from 'react';
import { allMovies } from '../../data/data';

interface AllMoviesProps {
  searchTerm: string;
  category: string; // Yeni prop
}

const AllMovies = ({ searchTerm, category }: AllMoviesProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 12;

  const filteredMovies = allMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === 'all' || movie.type === category)
  );

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
  const startIndex = (currentPage - 1) * moviesPerPage;
  const visibleMovies = filteredMovies.slice(startIndex, startIndex + moviesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="all-movies">
      <div className="all-movies-grid">
        {visibleMovies.length > 0 ? (
          visibleMovies.map((movie, index) => (
            <div className="all-movie-card" key={index + startIndex}>
              <div className="all-movie-thumbnail-wrapper">
                <Image
                  className="all-movie-thumbnail"
                  src={movie.src}
                  alt={`${movie.title} poster`}
                  width={210}
                  height={315}
                  loading="lazy"
                />
              </div>
              <div className="all-movie-info">
                <h3 className="all-movie-title">{movie.title}</h3>
                <p className="all-movie-description">{movie.description} - {movie.type}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Aradığınız filme uygun sonuç bulunamadı.</p>
        )}
      </div>
      {filteredMovies.length > 0 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllMovies;