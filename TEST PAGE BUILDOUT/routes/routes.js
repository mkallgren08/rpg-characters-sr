// Routes
// =============================================================
module.exports = function (app) {
  // Homepage Route
  app.get('/test', function (req, res) {
    let hbsObject = {
      title: "Homepage - Michael Kallgren",
      homepage: 'active',
      results: res
    }
    // console.log("hbsObj for rendering: " + JSON.stringify(hbsObject), null, 2);
    res.render("test.handlebars", hbsObject);
  });

  
}