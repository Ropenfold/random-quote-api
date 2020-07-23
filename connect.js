const mongodb = require('mongodb');

const uri = process.env.MONGODB_URI

 const connect = database => { 
    return mongodb.MongoClient.connect(uri, {useNewUrlParser: true})
    .then(client => {
        console.log("connected to MongoDB!")
        console.log("process.env.MONGODB_URI", process.env.MONGODB_URI);
        return client.db(database)
    }).catch((err) => {
        console.log(err)
    })
};

module.exports = connect;