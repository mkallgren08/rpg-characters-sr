let urlprefix = "/public/components/"

var exports = module.exports = {}

let routedest = [
  'signup',
  'signin',
  //'dashboard',
  'logout'
]

for (let i = 0; i < routedest.length; i++) {
  if (routedest === 'logout') {
    exports[routedest[i]] = function (req, res) {
      req.session.destroy(function (err) {
        if(err){
          alert(err)
        } else {
          res.redirect('/');
        };
      });
    };
  }
  else {
    exports[routedest[i]] = function (req, res) {
      let baseURL = urlprefix + "/"+ routedest[i]
      let logicURL =  baseURL + "/"+ routedest[i] + ".js"
      let styleURL = baseURL + "/"+ routedest[i] + ".css"
      let hbsObj = {
        pagelogic: logicURL,
        pagestyle: styleURL
      }
      res.render(routedest[i], hbsObj)
    };
  };
};

// exports.signup = function(req, res) {
//     res.render('signup');
// }
// exports.signin = function(req, res) {
//     res.render('signin');
// }
exports.dashboard = function(req, res) {
    res.render('dashboard');
}

// exports.logout = function (req, res) {
//   req.session.destroy(function (err) {
//     res.redirect('/');
//   });
// }