var settings = require('../settings');
var mongoose = require('mongoose');

mongoose.connect(settings.db, function (err) {
    if (err) {
        console.error('connect to %s error: ', settings.db, err.message);
        process.exit(1);
    }
});

require('./user');
//require('./goods');
//require('./category');
//require('./order');

exports.User = mongoose.model('User');