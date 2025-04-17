// C:\nextjs\nextsitem\backend\index.js
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const movieRoutes = require('./routes/movieRoutes');
const interactionRoutes = require('./routes/interactionRoutes'); // Yeni eklenen satır

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/movies', movieRoutes);
app.use('/interactions', interactionRoutes); // Yeni eklenen satır

app.get('/test', (req, res) => {
  res.json({ message: 'Backend çalışıyor!' });
});

app.listen(port, () => {
  console.log(`Backend ${port} portunda çalışıyor.`);
});