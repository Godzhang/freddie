const redis = require("redis");
const { REDIS_CONF } = require("../conf/db");

// 创建客户端
const { port, host } = REDIS_CONF;
const redisClient = redis.createClient(port, host);
redisClient.on("error", err => {
  console.log(err);
});

module.exports = redisClient;
