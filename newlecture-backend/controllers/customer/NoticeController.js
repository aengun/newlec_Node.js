var express = require('express');
var router = express.Router();
// const mysql = require('mysql');
var dbTemplate = require('../../config/DBTemplate');

router.get('/list', function (req, res, next) {
    // ==> config/DataSource, DBTemplate로 옮김
    // var connection = mysql.createConnection({
    //   host: 'hi.namoolab.com',
    //   port: 9898,
    //   user: 'newlecture',
    //   password: '11111',
    //   database: 'newlecture'
    // });

    // connection.connect();

    // connection.query('SELECT * FROM Notice', function (error, results, fields) {
    //   if (error) throw error;
    //   console.log('The solution is: ', results[0].title);
    //   res.render("customer/notice/list", {list:results});
    // });

    // connection.end();

    dbTemplate
        .query('SELECT * FROM Notice')
        .then((list) => {
            res.render("customer/notice/list", { list });
        });

});

router.get('/detail', function (req, res, next) {
    res.render("./customer/notice/detail");
});

module.exports = router;