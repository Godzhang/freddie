const Mockjs = require("mockjs");

function Mock(app) {
  app.get("/cart/getCartList", function(req, res) {
    let data = Mockjs.mock({
      "list|1-10": [
        {
          "id|+1": 5
        }
      ]
    });
    res.json(data);
  });
}

module.exports = Mock;
