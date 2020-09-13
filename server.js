var express = require("express");
var app = express();

var cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 }));
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", function (req, res) {
  res.json({
    ipaddress: "35.191.8.28",
    language: req.header("Accept-Language"),
    software: req.header("User-Agent"),
  });
});

var listener = app.listen(8080, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
