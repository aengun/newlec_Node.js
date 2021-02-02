var express = require('express');
var router = express.Router();
// const mysql = require('mysql');
var dbTemplate = require('../../config/DBTemplate');

router.get('/list', function (req, res, next) {

    dbTemplate
        .query('SELECT * FROM Notice')
        .then((list) => {
            res.json(list);
        });

});

router.get('/:id', function (req, res, next) {

    dbTemplate
        .query(`SELECT * FROM Notice where id=${req.params.id}`)
        .then(list => list[0])
        .then(notice => {
            res.json(notice);
        });

});
module.exports = router;