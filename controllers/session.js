var settings = require('../settings');
var User = require('../db/index').User;
var encryptor = require('../utils/encryptor');

exports.show_login = function(req, res) {
    res.render('login');
}

exports.login = function(req, res) {
    //req.flash('info', 'login...');
    User.findOne( {name: req.body.name}, function(err, user){

        var password = user.password;
        var encrypt_user = {
            password_digest: user.password_digest,
            name: user.name
        };

        var encrypt_content = encryptor.encryptor(encrypt_user);
        if(password !== encrypt_content) {
            console.log('invalid password');
            return;
        }

        if (err) {
            console.log('show user query failed'+err);
            return;
        }

        //res.render('show', {post: post});
        res.session.user = user;
    });

    res.redirect('/');
}

exports.logout = function(req, res) {
    res.session.user = null;
    res.redirect('/');
}
