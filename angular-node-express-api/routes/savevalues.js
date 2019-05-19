var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get('/', function (request, response) {
    fs.writeFile('savedValues.json', request.body, function (err) {
        if (err) {
            console.error(err);
            return response.status(500).json(err);
        }
        console.info('Updated savedValues.json');
        response.send(); 
    });
});

module.exports = router;
