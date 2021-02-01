const mysql = require('mysql');
const datasource = require('./DataSource');

function query(sql) {

    return new Promise((resolve, reject) => {
        var connection = mysql.createConnection(datasource);

        connection.connect();

        connection.query(sql, function (error, results, fields) {
            // if (error) throw error;
            if (error)
                reject(error);

            resolve(results);
            // console.log('The solution is: ', results[0].title);
            // res.render("customer/notice/list", { list: results });
        });

        connection.end();

    });

}

exports.query = query;
