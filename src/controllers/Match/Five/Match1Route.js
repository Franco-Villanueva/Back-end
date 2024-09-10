// src/routes/matchFortniteRoutes.js
const express = require('express');
const { createMatch, getMatches, getMatchById } = require('./Match1Controller');
const router = express.Router();

router.post('/matches/1', createMatch);
router.get('/matches/1', getMatches);
router.get('/matches/1/:id', getMatchById);

module.exports = router;
