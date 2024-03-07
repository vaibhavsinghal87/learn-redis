var express = require('express');
var router = express.Router();
var redisClient = require('../client');

/* GET Todos */
router.get('/', async (req, res, next) => {
  const cache = await redisClient.get('todos');
  if (cache) {
    return res.json(JSON.parse(cache));
  }
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(async (data) => {
      await redisClient.set('todos', JSON.stringify(data));
      await redisClient.expire('todos', 30);
      return res.json(data);
    });
});

module.exports = router;
