// src/routes/matchFortniteRoutes.js
const express = require('express');
const { createMatch, getMatches, getMatchById } = require('./Match2Controller');
const router = express.Router();

router.post('/matches/2', createMatch);
router.get('/matches/2', getMatches);
router.get('/matches/2/:id', getMatchById);

module.exports = router;
