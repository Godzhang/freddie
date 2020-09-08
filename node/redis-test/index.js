const redis = require("redis");

const config = {
  port: "6379",
  host: "59.110.238.48",
  pass: "123456",
};

const redisClient = redis.createClient(config.port, config.host);

redisClient.auth(config.pass);

redisClient.on("error", (err) => {
  console.log("err", err);
});
redisClient.set("name", "zhangqi", () => {
  console.log("set");
});
// setTimeout(() => {
//   console.log("get", redisClient.get("foo"));
// }, 2000);
