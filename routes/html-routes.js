// Dependencies
// =============================================================
var path = require("path");
// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.
  app.get("/", function(req, res) {
    res.render('index');
  });
  app.get("/scraped", function(req, res) {
    res.render('scraped');
  });
  app.get("/saved-articles", function(req, res) {
    res.render('saved');
  });
};