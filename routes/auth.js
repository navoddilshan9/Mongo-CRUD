var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var User = require("../controller/user");
const bcrypt = require("bcryptjs");
const saltRounds = 5;

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/verifyUser', urlencodedParser, async (req, res) => {
    User.verifyUser(req.body.email, req.body.password, function (err, user) {
      console.log(req.body.email)
      if (err) {
        console.log("errors" + err);
        // res.sendStatus(400);
        res.setHeader("Content-Type", "application/json");
        res.end("Credentials Does Not Matched");
        return;
      } else {
        console.log(user);
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ user: user }));
      }
    });
  });

  module.exports = router;