const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*"
  })
);

app.use(express.static(path.join(__dirname, "dist")));

app.get("/*", function(req, res, next) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(9000, function() {
  console.log("Listen on PORT 9000");
});
