const Artist = require('../models/Artist.js');

const { lastRequest } = require('./utils.js');

exports.search = async (req, res, next) => {
  const { type, term } = req.body.search;
  req.results = await lastRequest(type, 'getsimilar', term);
  next();
};

exports.createArtist = (req, res, next) => {
  req.artist = new Artist(req.body.search.term);
  next();
};

exports.addSimilarArtists = (req, res, next) => {
  req.results.forEach((artist) => {
    req.artist.addRelationship('Artist', 'name', artist.name, 'IS_SIMILAR');
  });
  next();
};
