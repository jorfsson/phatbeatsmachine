const Artist = require('../models/Artist.js');

const { lastRequest } = require('./utils.js');

exports.serviceWorker = async (msg) => {
  const { type, term } = msg;
  const artist = new Artist(term);
  
  if (artist.get('search') === undefined) {
    let results = await lastRequest(type, 'getsimilar', term);
    artist.set({ search: true });
    results.forEach((result) => {
      artist.addRelationship('Artist', 'name', result.name, 'IS_SIMILAR');
    })
  }
}
