// C:\nextjs\nextsitem\backend\routes\movieRoutes.js
const express = require('express');
const movieController = require('../controllers/movieController');

const router = express.Router();

router.get('/fetch-movies', movieController.fetchMovies);
router.get('/movies', movieController.getMovies);
router.get('/movies/:id', movieController.getMovieById);

module.exports = router;