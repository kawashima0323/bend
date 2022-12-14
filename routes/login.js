var express = require('express');
var router = express.Router();

var mysql = require('mysql');
const config = require('../public/javascripts/db_config.js');

/* GET home page. */
router.post('/', function(req, res, next) {

    // フロントからのパラメータ取得
    const userId = req.body.userId;
    const password = req.body.password;
    console.log("userid" + userId);
    console.log("paass" + password);
    // コネクションの用意
    const connection = mysql.createConnection(config.mysql_setting);

    connection.query(config.loginSQL, [userId, password],
        function(error, results, fields) {

            console.log(results);
            if (results.length >= 1) {
                res.send('OK');
            } else {
                res.send('NG');
            }
        }
    );
    console.log(connection.query);
});

module.exports = router;