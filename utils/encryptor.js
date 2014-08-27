var crypto = require('crypto');
var shasum =  crypto.createHash('sha1');

exports.encryptor = function encryptor(encrypt) {
    for(var k in encrypt) {
        shasum.update(String(encrypt[k]));
    }
    return shasum.digest('hex');
}

exports.random_string = function random_string(n)
{
    var ret;
    var strings = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for(var i=0; i<n;++i) {
        ret +=  strings[Math.floor(Math.random()*36)];
    }
    return ret;
}
