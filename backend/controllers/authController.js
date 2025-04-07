//C:\nextjs\nextsitem\backend\controllers\authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

async function signup(req, res) {
  const { username, email, password, full_name } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Tüm alanlar zorunludur' });
  }

  try {
    const existingUser = await userModel.findUserByUsername(username);
    if (existingUser) {
      return res.status(400).json({ error: 'Kullanıcı adı veya e-posta zaten kayıtlı' });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await userModel.createUser(username, email, hashedPassword, full_name);
    res.status(201).json({ message: 'Kayıt başarılı!' });
  } catch (error) {
    console.error('Signup hatası:', error);
    res.status(500).json({ error: 'Bir hata oluştu' });
  }
}

async function login(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Kullanıcı adı ve şifre zorunludur' });
  }

  try {
    const user = await userModel.findUserByUsername(username);
    if (!user) {
      return res.status(400).json({ error: 'Kullanıcı bulunamadı' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Yanlış şifre' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, username: user.username, message: 'Giriş başarılı!' });
  } catch (error) {
    console.error('Login hatası:', error);
    res.status(500).json({ error: 'Bir hata oluştu' });
  }
}

module.exports = { signup, login };