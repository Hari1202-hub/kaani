var express = require("express");
var app = express();

app.set("port", process.env.PORT || 7000);

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.render("index.html");
});

app.listen(app.get("port"), function() {
  console.log("Node app is running on port", app.get("port"));
});