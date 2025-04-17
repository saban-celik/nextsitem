//C:\nextjs\nextsitem\backend\routes\authRoutes.js
const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// Signup için POST rotası (değişmedi)
router.post('/signup', authController.signup);
// Signup için GET rotası (yeni eklendi)
router.get('/signup', (req, res) => {
  res.status(405).json({ error: 'Bu endpoint sadece POST isteklerini kabul eder' });
});

// Login için POST rotası (değişmedi)
router.post('/login', authController.login);
// Login için GET rotası (yeni eklendi)
router.get('/login', (req, res) => {
  res.status(405).json({ error: 'Bu endpoint sadece POST isteklerini kabul eder' });
});

module.exports = router;