let urlprefix = "/public/pages/"

let Models = require("../models");

var exports = module.exports = {}

let routedest = [
  'signup',
  'signin',
  'dashboard',
  'logout',
  'addskills',
  'test'
]

for (let i = 0; i < routedest.length; i++) {
  if (routedest[i] === 'logout') {
    exports[routedest[i]] = function (req, res) {
      req.session.destroy(function (err) {
        if(err){alert(err)} 
        else {res.redirect('/')};
      });
    };
  }
  else {
    exports[routedest[i]] = function (req, res, userid) {
      // let baseURL = urlprefix + "/"+ routedest[i]
      // let logicURL =  baseURL + "/"+ routedest[i] + ".js"
      // let styleURL = baseURL + "/"+ routedest[i] + ".css"
      let hbsObj = {
        // pagelogic: logicURL,
        // pagestyle: styleURL
      }
      if (routedest[i]!=='signup' || routedest[i]!=='signin' || routedest[i] !== 'logout'){
        if(req.session.passport){
          let currentUserid = req.session.passport.user
          // console.log('=========================')
          // console.log(currentUserid)
          // console.log('=========================')
          Models.User.findAll({where:{userid:currentUserid}}).then(function(data){
            // console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
            // console.log(JSON.stringify(data[0],null,2))
            // console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv')
            hbsObj.user = data[0]
            hbsObj.admin = data[0].administrator
            hbsObj.loggedIn = true;
            console.log(hbsObj)
            res.render(routedest[i], hbsObj)
          });
        }else{
          hbsObj.loggedIn = true;
          console.log(hbsObj)
          res.render(routedest[i], hbsObj)
        }
      } else {
        res.render(routedest[i], hbsObj)
      }
      
    };
  };
};

exports.test = function(req, res) {
    res.render('test');
}