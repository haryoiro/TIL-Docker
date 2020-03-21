const router = require('express').Router();

//auth
router.get('/login', (req, res) => {
  res.render('login');
})


module.exports = router