// src/routes/matchFortniteRoutes.js
const express = require('express');
const { createMatch, getMatches, deleteMatchById } = require('./Match1Controller');
const router = express.Router();

router.post('/matchs', createMatch);
router.get('/matchs', getMatches);
router.delete('/matchs/:id', deleteMatchById);

module.exports = router;
