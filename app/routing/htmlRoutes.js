
var path = require("path");




module.exports = function(app) {
  

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/survey.html"));
  });

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public//html/home.html"));
  });

 
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/home.html"));
  });
};
