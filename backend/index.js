const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Hoş geldiniz! Backend çalışıyor.' });
});

app.get('/test', (req, res) => {
  res.json({ message: 'Backend çalışıyor!' });
});

app.listen(port, () => {
  console.log(`Backend ${port} portunda çalışıyor.`);
});