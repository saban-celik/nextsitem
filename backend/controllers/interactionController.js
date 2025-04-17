// C:\nextjs\nextsitem\backend\controllers\interactionController.js
const interactionModel = require('../models/interactionModel');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

async function addInteraction(req, res) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Yetkilendirme gerekli' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user_id = decoded.id;
    const { movie_id, action, rating } = req.body;

    if (!movie_id || !action) {
      return res.status(400).json({ error: 'movie_id ve action zorunlu' });
    }

    await interactionModel.createInteraction(user_id, movie_id, action, rating);
    res.json({ message: 'Etkileşim kaydedildi' });
  } catch (error) {
    console.error('Etkileşim eklerken hata:', error);
    res.status(500).json({ error: 'Etkileşim eklerken hata oluştu' });
  }
}

async function getInteractions(req, res) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Yetkilendirme gerekli' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user_id = decoded.id;
    const interactions = await interactionModel.getUserInteractions(user_id);
    res.json(interactions);
  } catch (error) {
    console.error('Etkileşimleri getirirken hata:', error);
    res.status(500).json({ error: 'Etkileşimleri getirirken hata oluştu' });
  }
}

module.exports = { addInteraction, getInteractions };