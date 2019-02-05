const Artist = require('../models/Artist.js');

const request = require('./utils.js');

module.exports = (msg) => {
  console.log(msg);
  const { type, term } = msg;
  const artist = new Artist(term);

  if (artist.get('search') === undefined) {
    let results = request(type, 'getsimilar', term);
    artist.set({ search: true });
    results.forEach((result) => {
      artist.addRelationship('Artist', 'name', result.name, 'IS_SIMILAR');
    })
  }
}
