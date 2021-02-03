var express = require('express');
var router = express.Router();
var dbTemplate = require('../../config/DBTemplate');

router.get('/:id', function (req, res, next) {

    dbTemplate
        .query(`SELECT * FROM Member where uid='${req.params.id}'`)
        .then(list => list[0])
        .then(notice => {
            res.json(notice);
        });

});
module.exports = router;