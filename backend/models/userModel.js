//C:\nextjs\nextsitem\backend\models\userModel.js
const pool = require('../config');

async function findUserByUsername(username) {
  const [users] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
  return users[0];
}

async function createUser(username, email, hashedPassword, full_name = null) {
  await pool.query(
    'INSERT INTO users (username, email, password, full_name) VALUES (?, ?, ?, ?)',
    [username, email, hashedPassword, full_name]
  );
}

module.exports = { findUserByUsername, createUser };