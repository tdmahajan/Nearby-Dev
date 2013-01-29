var mongo = require('mongodb');

var Server = mongo.Server,
    Db     = mongo.Db,
    BSON   = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('BCDSN', server, {safe: true});

exports.findChildCats = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving child Categories: ' + id);
    db.collection('categories', function(err, collection) {
        collection.find({parent:id}).toArray(function(err, items) {
            res.send(items);
        });
    });
}

exports.findItemsByCats = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving items from category: ' + id);
    db.collection('items', function(err, collection) {
        collection.find({Categories: { $in: [id] } },{SKUName:1,TradeOptions:1}).toArray(function(err, items) {
            res.send(items);
        });
    });
}

exports.findItemsFreeText = function(req, res) {
    var freeText = req.params.freeText;
    console.log('Free Text: ' + freeText);
    db.collection('items', function(err, collection) {
        collection.find({SKUName: { $regex: freeText, $options: 'i' }},{SKUName:1,TradeOptions:1}).toArray(function(err, items) {
            res.send(items);
        });
    });
}

