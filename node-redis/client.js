const redis = require('redis');
const client = redis.createClient({url: process.env.REDIS_HOST});

(async () => {
    // connect to redis
    await client.connect();

    // handle error
    client.on('error', (err) => {
        console.error(`An error occurred with Redis: ${err}`)
    })

    console.log('Redis connected successfully...')
})();

module.exports = client;