const client = require("../db/redis");

const CONFIG = {
  key: "loginStatus",
  maxAge: 86400000,
  overwrite: true,
  httpOnly: false,
  signed: false,
  store: {},
};

CONFIG.store.get = async (key) => {
  console.log("redis get key ", key);
  const result = await client.getAsync(key);
  console.log("get result: ", result);
  // CONFIG.store.destroy(key);
};

CONFIG.store.set = async (key, sess, maxAge) => {
  await client.setAsync(key, JSON.stringify(sess));
  console.log("redis set key ", key);
};

CONFIG.store.destroy = async (key) => {
  await client
    .delAsync(key)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("redis destroy key ", key);
};

module.exports = CONFIG;
