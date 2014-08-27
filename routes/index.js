var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/user');
var session_controller = require('../controllers/session');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express', message: req.flash('info') });
});

router.get('/users', user_controller.index);
router.get('/users/new', user_controller.new);
router.post('/user/create', user_controller.create);
router.get('/user/:id', user_controller.show);
router.get('/user/:id/edit', user_controller.edit);
router.get('/user/:id/delete', user_controller.delete);
router.post('/user/:id/update', user_controller.update);

router.get('/signup', user_controller.new);
router.post('/signup', user_controller.create);

router.get('/login', session_controller.show_login);
router.post('/login', session_controller.login);
router.get('/logout', session_controller.logout);

module.exports = router;
