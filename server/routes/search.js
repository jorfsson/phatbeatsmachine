const express = require('express');

const router = express.Router();
const { search, createArtist, addSimilarArtists } = require('../controllers/searchController');

router.post('/', search, createArtist, addSimilarArtists, (req, res) => {
  res.send('Completed!');
});

module.exports = router;
