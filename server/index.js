const app = require('express')(),
      server = require('http').Server(app),
      path = require('path'),
      port = 3000;

app.get('/api', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
})

app.listen(port, () => console.log(`Listening on ${port} friendo`))
