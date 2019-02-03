const Artist = require('../models/Artist.js'),
      { lastRequest } = require('./utils.js');

exports.search = async (req, res, next) => {
  let { type, term } = req.body.search;
  req.results = await lastRequest(type, 'getsimilar', term);
  next();
}

exports.createArtist = (req, res, next) => {
  req.artist = new Artist(req.body.search.term);
  next();
}

exports.addSimilarArtists = (req, res, next) => {
  req.results.forEach(artist => {
    req.artist.addRelationship('Artist', 'name', artist.name, 'IS_SIMILAR').then(res => console.log(res)).catch(err => console.log('hello ', err))
  })
  next();
}
