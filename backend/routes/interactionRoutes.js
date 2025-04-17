// C:\nextjs\nextsitem\backend\routes\interactionRoutes.js
const express = require('express');
const interactionController = require('../controllers/interactionController');

const router = express.Router();

router.post('/interactions', interactionController.addInteraction);
router.get('/interactions', interactionController.getInteractions);

module.exports = router;