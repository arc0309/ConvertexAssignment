var express = require('express');
var router = express.Router();
const fs = require('fs');

router.post('/', function (request, response) {
    fs.writeFile('savedValues.json', JSON.stringify(request.body), function (err) {
        console.info(JSON.stringify(request.body));
        if (err) {
            console.error(err);
            return response.status(500).json(err);
        }
        console.info('Updated savedValues.json');
        response.send(); 
    });
});

module.exports = router;

