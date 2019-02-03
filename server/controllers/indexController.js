const path = require('path');

exports.index = (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
};
