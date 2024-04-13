const express = require("express");
const router = express.Router();

router.route("/default").get((req, res) => {
  res.send(`<h2>Hello V1</h2>`);
});

router.get("/messageSuccess", (req, res) => {
  message = {
    version: '1.0',
    status: 200,
    message: {
      texto: "Mensaje Success",
    },
  };

  res.send(message);
});

router.get("/*", (req, res) => {
  message = {
    version:'1.0',
    status: 500,
    message: {
      texto: "Mensaje Fail",
    },
  };

  res.send(message);
});



module.exports = router;
