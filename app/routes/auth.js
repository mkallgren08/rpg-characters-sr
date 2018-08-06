var authController = require('../controllers/authcontroller.js');

module.exports = function (app, passport) {

    app.get('/signup', authController.signup);

    app.get('/signin', authController.signin);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard', failureRedirect: '/signup'}
    ));

    // app.post('/signIN', function(req,res,next){
    //   console.log('/////////////////////////////////')
    //   console.log(req.user)
    //   console.log('/////////////////////////////////')
    //   passport.authenticate('local-signin', function(err,user,info){
    //     if(err){return next(err)}
    //     if(!user){return res.redirect('/signin')}
    //     req.login(user,function(err){
    //       if(err) {return next(err)}
    //       return res.redirect('/test')
    //     })
    //   }
      
    // );
    // })
    


    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',

        failureRedirect: '/signin'}
    ));

    // app.post('/signin', function(req,res,next){
    //   passport.authenticate('local-signup', function(err,user,info){
    //     if (err) {return next(err)}
    //     if(!user) {return res.redirect('signin')}
    //     req.logIn(user,function(err){
    //       if (err) {return next(err)}
    //       return res.redirect('/dashboard/'+user)
    //     })
    //   }) (req,res,next)
    // })

    app.get('/dashboard', isLoggedIn, authController.dashboard);
    app.get('/test', isLoggedIn, authController.test);
    app.get('/addskills',isLoggedIn,authController.addskills);

    app.get('/logout', authController.logout);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) return next();
        res.redirect('/signin');
    }

    // function getUserID(req,res){
    //   if(req.isAuthenticated()) return
    // }
}