const redis = require("redis");
const bluebird = require("bluebird");
const config = require("../conf/redis");

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const { port, host, pass } = config;
const client = redis.createClient(port, host);

client.auth(pass);

client.on("error", (err) => {
  console.log("err", err);
});

client.on("ready", () => {
  console.log("redis ready");
});

module.exports = client;
