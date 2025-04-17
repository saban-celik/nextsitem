// C:\nextjs\nextsitem\backend\models\movieModel.js
const pool = require('../config');

async function createMovie(movie_id, title, overview, release_date, poster_path, vote_average, genres, videos, cast) {
  await pool.query(
    `INSERT IGNORE INTO movies (movie_id, title, overview, release_date, poster_path, vote_average, genres, videos, cast)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [movie_id, title, overview, release_date, poster_path, vote_average, genres, videos, cast]
  );
}

async function getMovies() {
  const [movies] = await pool.query('SELECT * FROM movies');
  return movies.map((movie) => ({
    ...movie,
    genres: movie.genres ? JSON.parse(movie.genres) : [],
    videos: movie.videos ? JSON.parse(movie.videos) : [],
    cast: movie.cast ? JSON.parse(movie.cast) : [],
  }));
}

async function getMovieById(movie_id) {
  const [movies] = await pool.query('SELECT * FROM movies WHERE movie_id = ?', [movie_id]);
  const movie = movies[0];
  if (!movie) return null;
  return {
    ...movie,
    genres: movie.genres ? JSON.parse(movie.genres) : [],
    videos: movie.videos ? JSON.parse(movie.videos) : [],
    cast: movie.cast ? JSON.parse(movie.cast) : [],
  };
}

module.exports = { createMovie, getMovies, getMovieById };