var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('BCDSN', server, {safe: true});

exports.findItemsByCat = function(req, res) {
    var id = req.params.id;
    getItems(function(err,items){
       tradeitems = items;
       //res.send(items);
    });
    res.send(tradeitems);
};

getItems = function(callback) {
   db.collection('tradeitems', function(err, collection) {
        collection.find().toArray(function(err, items) {
            callback(null,items)
        });
    });
};

exports.findTradeItemById = function(req, res) {

    var id = req.params.id;

    db.collection('tradeitems', function(err, collection) {
        collection.find({_id:id}).toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.findByParentId = function(req, res) {
    var id = req.params.id;

    console.log('Retrieving child Categories: ' + id);
    
    db.collection('categories', function(err, collection) {
        collection.find({parent:id}).toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving child Categories: ' + id);
    db.collection('categories', function(err, collection) {
        collection.findOne({_id:id}, function(err, item) {
            res.send(item);
        });
    });
};

exports.findAll = function(req, res) {
    console.log('Retrieving child Categories: ');
    db.collection('categories', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};
