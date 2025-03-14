// src\components\ui\TrendsTitles.tsx
import { FaComment, FaEye, FaStar } from 'react-icons/fa';
import { trendMovies } from '../../data/data';

interface TrendsTitlesProps {
  searchTerm: string;
}

const TrendsTitles = ({ searchTerm }: TrendsTitlesProps) => {
  const filteredTrendMovies = trendMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="trendbar">
      <h2 className="trendbar-title">Trend Film İzle</h2>
      <ul className="trend-movies-list">
        {filteredTrendMovies.length > 0 ? (
          filteredTrendMovies.map((movie) => (
            <li key={movie.rank} className="trend-movie-item">
              <span className="trend-rank">{movie.rank}</span>
              <img src={movie.poster} alt={`${movie.title} poster`} className="trend-poster" />
              <div className="trend-content">
                <div className="trend-info">
                  <h3 className="trend-title">{movie.title}</h3>
                  <div className="trend-stats">
                    <span className="trend-stat">
                      <FaEye /> {movie.views.toLocaleString()}
                    </span>
                    <span className="trend-stat">
                      <FaStar /> {movie.rating}
                    </span>
                    <span className="trend-stat">
                      <FaComment /> {movie.comments}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p>Aradığınız trend filme uygun sonuç bulunamadı.</p>
        )}
      </ul>
    </div>
  );
};

export default TrendsTitles;