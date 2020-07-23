var express = require('express');
var router = express.Router();
const connect = require('../connect');

var db;

/* GET users listing. */
router.get('/', function (req, res, next) {
  db.collection("quotes")
  .aggregate([{ $sample: { size: 1 } }])
  .toArray()
  .then(data => res.json({payload: data}));
});

connect("quotes").then(database => {
  db = database;
})

module.exports = router;
