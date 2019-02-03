const Artist = require('../models/Artist.js'),
      request = require('request-promise-native');

exports.search = async (req, res, next) => {
  req.results = await request({
    url: 'http://ws.audioscrobbler.com/2.0/',
    type: 'GET',
    qs: {
      method: `${req.body.search.type}.getsimilar`,
      artist: req.body.search.term,
      api_key: '04c96ec32bbace5646ad77d7c171ae4a' ,
      format: 'json'
    },
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(data => JSON.parse(data).similarartists.artist)
  .catch(err => console.log(err))
  next();
}

exports.createArtist = (req, res, next) => {
  req.artist = new Artist(req.body.search.term);
  next();
}

exports.addSimilarArtists = (req, res, next) => {
  req.results.forEach(artist => {
    req.artist.addRelationship('Artist', 'name', artist.name, 'IS_SIMILAR');
  })
  next();
}
