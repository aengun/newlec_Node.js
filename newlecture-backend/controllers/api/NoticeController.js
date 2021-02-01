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

router.get('/detail', function (req, res, next) {
    res.render("./customer/notice/detail");
});

module.exports = router;