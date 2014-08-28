var settings = require('../settings');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

mongoose.connect(settings.db, function (err) {
    if (err) {
        console.error('connect to %s error: ', settings.db, err.message);
        process.exit(1);
    }
});

var UserSchema = new mongoose.Schema({
    name:               String,         //用户名
    sex:                Number,         //0-male 1-female 2-secret
    birth:              Date,           //日期
    email:              String,         //email
    tel:                [ Number ],     //电话
    password:           String,         //password
    password_digest:    String
});


var GoodsSchema = new mongoose.Schema({
    name:               String,         //产品名称  
    production_no:      String,         //产品标号
    price:              Number,         //产品单价
    total:              Number,         //产品总量
    stars:              Number,         //产品星级
    main_title:         String,         //主标题
    via_title:          String,         //副标题
    main_pic:           [String],       
    item_pic:           [String],
    zoom_pic:           [String],
    specification:      String,         //产品参数
    introduction:       String,         //产品介绍 html
    category_id:        ObjectId        //所属类别
});

var CategorySchema = new mongoose.Schema({
    name:               String,         
    children_categories: [ObjectId]
});

var CartSchema = new mongoose.Schema({
    items: [ { goods_id: ObjectId, total: Number } ]
});

mongoose.model('User', UserSchema);
mongoose.model('Goods', GoodsSchema);
mongoose.model('Category', CategorySchema);
mongoose.model('Cart', CartSchema);

exports.User = mongoose.model('User');
exports.Goods = mongoose.model('Goods');
exports.Category = mongoose.model('Category');
exports.Cart = mongoose.model('Cart');
