var User = require('../db/index').User;
var settings = require('../settings');
var encryptor = require('../utils/encryptor');

exports.index = function(req, res){
    User.find(function(err, users){
        if(err){
            console.log('find user data failed: '+err);
            return;
        }

        res.render('user/index', {users: users});
    });
}
exports.new = function(req, res){
    res.render('user/new');
}
exports.create = function(req, res){
    var userEntity = new User(
        {
            name: req.body.name,
            sex: req.body.sex,
            brith: req.body.brith,
            email: req.body.email,
            password: req.body.password
        }
    );


    if (userEntity.name.length < settings.name_length_min || userEntity.name.length > settings.name_length_max) {
        console.log('user name is too short or too long');
        req.flash('user name is invalid');
        res.redirect('/');
        return;
    }

    //sex
    //birth
    //email
    //password

    userEntity.password_digest = encryptor.random_string(settings.password_digest_len_max);
    //console.log(userEntity);

    var encrypt_user = {
        password_digest: userEntity.password_digest,
        name: userEntity.name
    };

    var encrypt_content = encryptor.encryptor(encrypt_user);
    userEntity.password = encrypt_content;

    userEntity.save();
    res.redirect('/users');
}

exports.show = function(req, res){
    User.findOne( {_id: req.params.id}, function(err, user){
        if (err) {
            console.log('show user query failed'+err);
            return;
        }
        //console.log(post);
        res.render('user/show', {user: user});
    });
}

exports.edit = function(req, res){
    User.findOne({_id: req.params.id}, function(err, user){
        if(err) {
            console.log('edit edit failded'+err);
            return;
        }

        res.render('user/edit', {user: user});
    });
}

exports.delete = function(req, res){
    User.findOne({_id: req.params.id}, function(err, user){
        if(err) {
            console.log('user delete failded'+err);
            return;
        }

        user.remove();
        res.redirect('/');
    });
}

exports.update = function(req, res){
    User.findOne({_id: req.body.id}, function(err, user){
        if(err) {
            console.log('update query failded'+err);
            return;
        }

        user.name = req.body.name;
        user.sex = req.body.sex;
        user.birth = req.body.birth;
        user.email = req.body.email;
        user.save();
        res.redirect('/');
    });
}