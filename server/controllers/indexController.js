exports.index = function (req, res) {
  res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
}
