let urlprefix = "/public/pages/"

var exports = module.exports = {}

let routedest = [
  'signup',
  'signin',
  'dashboard',
  'logout',
  'test'
]

for (let i = 0; i < routedest.length; i++) {
  if (routedest[i] === 'logout') {
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
      // let baseURL = urlprefix + "/"+ routedest[i]
      // let logicURL =  baseURL + "/"+ routedest[i] + ".js"
      // let styleURL = baseURL + "/"+ routedest[i] + ".css"
      let hbsObj = {
        // pagelogic: logicURL,
        // pagestyle: styleURL
      }
      if (routedest[i]!=='signup' || routedest[i]!=='signin' || routedest[i] !== 'logout'){
        hbsObj.loggedIn = true;
        res.render(routedest[i], hbsObj)
      } else {
        res.render(routedest[i], hbsObj)
      }
      
    };
  };
};

// exports.signup = function(req, res) {
//     res.render('signup');
// }
// exports.signin = function(req, res) {
//     res.render('signin');
// }
// exports.dashboard = function(req, res) {
//     res.render('dashboard');
// }
exports.test = function(req, res) {
    res.render('test');
}

// exports.logout = function (req, res) {
//   req.session.destroy(function (err) {
//     res.redirect('/');
//   });
// }