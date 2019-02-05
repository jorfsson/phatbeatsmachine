const amqp = require('amqplib/callback_api');

const addArtists = require('../controllers/workerController.js');

amqp.connect('amqp://guest:guest@localhost:5672', function(err, conn) {
  conn.createChannel(function(err, ch) {
    const ex = 'main';

    ch.assertExchange(ex, 'direct', { durable: false });

    ch.assertQueue('', { exclusive: true }, (err, q) => {
      ch.bindQueue(q.queue, ex, 'artist');
      ch.consume(q.queue, (msg) => {
        let message = msg.toString();
        console.log(`Consuming message "${message.term}" of type "${message.type}"`);
        addArtists(message);
      }, {noAck: true});
    });
  });
});
