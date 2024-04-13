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

  res.status(200).send(message);
});

router.get("/*", (req, res) => {
  message = {
    version:'1.0',
    status: 500,
    message: {
      texto: "Mensaje Fail",
    },
  };

  res.status(500).send(message);
});



module.exports = router;
