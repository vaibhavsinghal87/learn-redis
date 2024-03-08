# Redis

## Run

### Standalone -
- ```cd node-redis```
- Run Redis server using docker - 
```docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest```
- Run Express app - 
```npm start```
- Navigate to ```http://localhost:3000/todos```

### Dockerize node app -
- Run Redis server using docker - 
```docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest```
- Create image - ```docker build . -t nodejs-redis```
- Run container - ```docker run -p 3001:3000 nodejs-redis```
- Navigate to ```http://localhost:3001/todos```
```
NOTE: On local update REDIS_HOST in Dockerfile to host.docker.internal
```