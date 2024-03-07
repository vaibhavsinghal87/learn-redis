const redis = require('redis');
const client = redis.createClient();

(async () => {
    // connect to redis
    await client.connect()

    // handle error
    client.on('error', (err) => {
        console.error(`An error occurred with Redis: ${err}`)
    })

    console.log('Redis connected successfully...')
})();

module.exports = client;
