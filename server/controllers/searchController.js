const Artist = require('../models/Artist.js');

const request = require('./utils.js');

const createTask = require('../queue/Task.js');

exports.search = async (req, res, next) => {
  const { type, term } = req.body.search;
  req.results = await request(type, 'getsimilar', term);
  next();
};

exports.createArtist = (req, res, next) => {
  req.artist = new Artist(req.body.search.term);
  next();
};

exports.addSimilarArtists = (req, res, next) => {
  req.artist.set({ search: true });
  createTask({ type: 'Artist', term: 'HelloGuy' });
  // req.results.forEach((artist) => {
  //
  //   req.artist.addRelationship('Artist', 'name', artist.name, 'IS_SIMILAR');
  // });
  next();
};
