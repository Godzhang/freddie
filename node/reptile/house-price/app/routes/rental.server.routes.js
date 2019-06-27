const RentalController = require("../controllers/rental.server.controller");

module.exports = function(app) {
  app.route("/").get((req, res) => {
    res.sendFile(`${__dirname}/../../views/index.html`);
  });
  app.route("/rental/getInfos").all(RentalController.getRentalInfos);
};
