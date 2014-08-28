var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: String,           //用户名
	sex: Number,            //0-male 1-female 2-secret
	birth: Date,            //日期
	email: String,          //email
    tel:    [ Number ],     //电话
	password: String,       //password
    password_digest: String
});

mongoose.model('User', UserSchema);
module.exports = UserSchema;