var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: String,
	sex: Number,
	birth: Date,
	email: String,
	password: String
});


mongoose.model('User', UserSchema);