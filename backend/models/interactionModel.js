// C:\nextjs\nextsitem\backend\models\interactionModel.js
const pool = require('../config');

async function createInteraction(user_id, movie_id, action, rating = null) {
  await pool.query(
    'INSERT INTO user_movie_interactions (user_id, movie_id, action, rating) VALUES (?, ?, ?, ?)',
    [user_id, movie_id, action, rating]
  );
}

async function getUserInteractions(user_id) {
  const [interactions] = await pool.query(
    'SELECT * FROM user_movie_interactions WHERE user_id = ?',
    [user_id]
  );
  return interactions;
}

module.exports = { createInteraction, getUserInteractions };