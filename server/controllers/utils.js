const request = require('request-promise-native');

module.exports = (type, method, term) => request({
  url: 'http://ws.audioscrobbler.com/2.0/',
  type: 'GET',
  qs: {
    method: `${type}.${method}`,
    [type]: term,
    api_key: '04c96ec32bbace5646ad77d7c171ae4a',
    format: 'json',
  },
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(data => JSON.parse(data).similarartists.artist)
  .catch((err) => { throw err; });
