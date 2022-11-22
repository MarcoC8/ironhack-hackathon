const { 
    signupGetController,
    signupPostController,
    loginGetController,
    loginPostController,
    profileGetController
  } = require('../controllers/auth.controllers');
  
  const {isLoggedIn, isAnon} = require('../middlewares/auth.middlewares');
  
  const router = require('express').Router();
  
  router.get('/signup', signupGetController);
  
  router.post('/signup', signupPostController);
  
  router.get('/login', isAnon, loginGetController);
  
  router.post('/login', isAnon, loginPostController);
  
  router.get('/facts', isLoggedIn ,profileGetController);
  
  router.get('/logout', (req, res, next)=>{
    req.session.destroy(()=> {
      res.redirect('/');
    })
  });
  
  module.exports = router;