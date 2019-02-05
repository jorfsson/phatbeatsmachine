const amqp = require('amqplib/callback_api');

module.exports = (msg) => {
  amqp.connect('amqp://guest:guest@localhost:5672', function (err, conn) {
    conn.createChannel((err, ch) => {
      const ex = 'main';

      ch.assertExchange(ex, 'direct', { durable: false });
      ch.publish(ex, 'artist', new Buffer.from(JSON.stringify(msg)));
      console.log(`Sent the following message: ${msg}`);
        conn.close();
    })
  })
}
