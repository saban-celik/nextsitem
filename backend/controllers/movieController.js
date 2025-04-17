// C:\nextjs\nextsitem\backend\controllers\movieController.js
const axios = require('axios');
const movieModel = require('../models/movieModel');

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

async function fetchMovies(req, res) {
  const page = parseInt(req.query.page) || 1;
  const maxPages = parseInt(req.query.maxPages) || 1; // Kaç sayfa çekileceği

  try {
    for (let currentPage = page; currentPage < page + maxPages; currentPage++) {
      const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
        params: {
          api_key: TMDB_API_KEY,
          language: 'en-US',
          page: currentPage,
        },
      });

      const movies = response.data.results;

      for (const movie of movies) {
        // Film detaylarını çek (türler, videolar, oyuncular)
        const movieDetails = await axios.get(`${TMDB_BASE_URL}/movie/${movie.id}`, {
          params: {
            api_key: TMDB_API_KEY,
            language: 'en-US',
            append_to_response: 'genres,videos,credits',
          },
        });

        const movieData = movieDetails.data;
        await movieModel.createMovie(
          movieData.id,
          movieData.title,
          movieData.overview,
          movieData.release_date,
          movieData.poster_path,
          movieData.vote_average,
          JSON.stringify(movieData.genres), // Türleri JSON olarak kaydet
          JSON.stringify(movieData.videos.results), // Videoları JSON olarak kaydet
          JSON.stringify(movieData.credits.cast.slice(0, 5)) // İlk 5 oyuncuyu kaydet
        );
      }
      console.log(`Page ${currentPage} saved`);
    }

    res.json({ message: `Filmler başarıyla çekildi ve kaydedildi (Sayfa ${page} - ${page + maxPages - 1})` });
  } catch (error) {
    console.error('Filmleri çekerken hata:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Filmleri çekerken bir hata oluştu' });
  }
}

async function getMovies(req, res) {
  try {
    const movies = await movieModel.getMovies();
    res.json(movies);
  } catch (error) {
    console.error('Filmleri getirirken hata:', error);
    res.status(500).json({ error: 'Filmleri getirirken bir hata oluştu' });
  }
}

async function getMovieById(req, res) {
  try {
    const movie = await movieModel.getMovieById(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: 'Film bulunamadı' });
    }
    res.json(movie);
  } catch (error) {
    console.error('Film detaylarını getirirken hata:', error);
    res.status(500).json({ error: 'Film detaylarını getirirken hata oluştu' });
  }
}

module.exports = { fetchMovies, getMovies, getMovieById };