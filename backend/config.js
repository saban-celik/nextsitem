//C:\nextjs\nextsitem\backend\config.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT),
});

// Bağlantıyı test et
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('MySQL bağlantısı başarılı!');
    connection.release();
  } catch (error) {
    console.error('MySQL bağlantı hatası:', error);
  }
}

testConnection();

module.exports = pool;