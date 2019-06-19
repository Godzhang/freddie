const fs = require("fs");
const request = require("request.js");
const createHeader = require("./requestHeader");

function requestID(id) {
  let header = createHeader(id);
  request(header, (err, response) => {
    if (err) {
      console.log("error");
      return;
    }
    if (response.statusCode === 200) {
      console.log("success, end time:", process.uptime());
    } else {
      console.log("Warning:get http response exception");
    }
  });
}
