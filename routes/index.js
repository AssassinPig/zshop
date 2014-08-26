var express = require('express');
var router = express.Router();
var controller = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

//User
router.get('/users', controller.user_controller.index);
router.get('/users/new', controller.user_controller.new);
router.post('/users/create', controller.user_controller.create);
router.get('/user/:id', controller.user_controller.show);
router.get('/user/:id/edit', controller.user_controller.edit);
router.get('/user/:id/delete', controller.user_controller.delete);
router.post('/user/:id/update', controller.user_controller.update);

router.get('/signup', controller.user_controller.new);
router.post('/signup', controller.user_controller.create);
//router.get('/login', );
//router.post('/login', );
//router.get('/logout', );

module.exports = router;
