const express = require('express'),
      router = express.Router(),
      { search, createArtist, addSimilarArtists } = require('../controllers/searchController');

router.post('/', search, createArtist, addSimilarArtists, (req, res) => {
  res.send('Completed!');
});

module.exports = router;
