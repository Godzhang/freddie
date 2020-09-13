const http = require("http");
const fs = require("fs");
const net = require("net");

const server = net.createServer((socket) => {
  console.log("someone connects");
});
server.listen(8000, () => {
  console.log("server is listening at port 8000");
  const address = server.address();
  console.log(address.port);
  console.log(address.address);
  console.log(address.family);
});
