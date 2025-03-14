//src\components\ui\TrendsTitles.tsx
import { FaComment, FaEye, FaStar } from 'react-icons/fa'; // Icons from react-icons

const TrendsTitles = () => {
  const trendMovies = [
    {
      rank: 1,
      title: 'Black Adam',
      poster: 'https://www.4kfilmizlesene.org/wp-content/uploads/2023/10/25182e942f145fbea9947458cd5e5d67-210x315.jpg',
      views: 509387,
      rating: 6.9,
      comments: 150,
      years: 15,
    },
    {
      rank: 2,
      title: 'Black Panther 2 ',
      poster: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/a140cd5946b695ae6a949ccdc6f632b7-210x315.jpg',
      views: 403988,
      rating: 6.1,
      comments: 120,
      years: 7,
    },
    {
      rank: 3,
      title: 'Esrarengiz Canavar',
      poster: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/10/a7f55a5047704870f7758c429c99468f-210x315.jpg',
      views: 401578,
      rating: 6.1,
      comments: 110,
      years: 7,
    },
    {
      rank: 4,
      title: 'Enola Holmes 2',
      poster: 'https://www.4kfilmizlesene.org/wp-content/uploads/2023/10/a80eb7a53a39eb2c32f15ac091a5cfa0-210x315.jpg',
      views: 399756,
      rating: 6.1,
      comments: 90,
      years: 1,
    },
    {
      rank: 5,
      title: 'Arabalar 2',
      poster: 'https://www.4kfilmizlesene.org/wp-content/uploads/2024/12/915bfbe658455df1d34dcf276dbcead1-210x315.jpg',
      views: 344233,
      rating: 6.1,
      comments: 80,
      years: 13,
    },
  ];

  return (
    <div className="trendbar">
      <h2 className="trendbar-title">Trend Film İzle</h2>
      <ul className="trend-movies-list">
        {trendMovies.map((movie) => (
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
        ))}
      </ul>
    </div>
  );
};

export default TrendsTitles;