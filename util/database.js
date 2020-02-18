const mongodb = require('mongodb');
const MongodbClient = mongodb.MongoClient;


let _db;

const mongoConnect = (callback) => {
    MongodbClient.connect('mongodb+srv://amir:python1377@cluster0-ncbji.mongodb.net/shop?retryWrites=true&w=majority',{ 
        useUnifiedTopology: true })
        .then(client => {
            console.log("connected");
            _db =  client.db();
            callback(client);
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw "No database Found!";
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;