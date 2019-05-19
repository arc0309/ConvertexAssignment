var express = require('express');
var router = express.Router();
const fs = require('fs');
var usersList = [];
fs.readFile('initialValues.json', (err, data) => {  
    // if (err) throw err;
    usersList = JSON.parse(data);
    console.log(usersList);
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({users: usersList});
});

module.exports = router;
