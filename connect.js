const mongodb = require('mongodb');

const uri = process.env.MONGODB_URI

const connect = database => { 
    return mongodb.MongoClient.connect(uri, {useNewUrlParser: true})
    .then(client => {
        console.log("connected to MongoDB!")
        return client.db(database)
    })
};

module.exports = connect;