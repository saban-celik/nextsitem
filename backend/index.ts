//C:\nextjs\nextsitem\backend\index.ts

import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mysql from 'mysql2/promise';

// .env dosyasını yükle
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json()); // JSON isteklerini parse etmek için
app.use(cors()); // CORS desteği (Next.js frontend ile iletişim için)

// MySQL bağlantı ayarları
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'sifren',
  database: process.env.DB_NAME || 'veritabanin_adi',
};

// Veritabanı bağlantı fonksiyonu
async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('MySQL veritabanına başarıyla bağlanıldı!');
    return connection;
  } catch (error) {
    console.error('Bağlantı hatası:', error);
    return null; // Hata durumunda null döndür
  }
}

// Test endpoint’i
app.get('/test', async (req, res) => {
  const connection = await connectToDatabase();
  if (connection) {
    res.send('Veritabanına bağlandı!');
    await connection.end(); // Bağlantıyı kapat
  } else {
    res.status(500).send('Veritabanı bağlantısı başarısız.');
  }
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Backend ${port} portunda çalışıyor.`);
});