// exports.index = function(req, res, next) {
//     res.send("Hello Index World!");
// }

// exports.help = function(req, res, next) {
//     res.send("Help~~!");
// }

//================================================================
// const { request } = require("express");

// const express = require("express");
// const router = express.Router(); // 전역객체

// //get Mapping
// router.get("/index", function (req, res, next) {
//     res.send("Hello Index World!!!!!!");
// });

// router.get("/help", function (req, res, next) {
//     res.send("Help!!!!!!");
// });


// // exports.aa = ?;
// module.exports = router;

//================================================================
const express = require("express");
const router = express.Router();

router.get("/index", function (req, res, next) {

    let list = [
        { id: 1, title: "Hello" },
        { id: 2, title: "Hi" }
    ];

    let count = 58;

    res.render("index.ejs", {list, count});
    
});

router.get("/list", function (req, res, next) {

    let list = [
        { id: 1, title: "Hello" },
        { id: 2, title: "Hi" }
    ];

    let count = 58;

    let model = {list, count};

    res.json(model);
    
});

router.get("/help", function (req, res, next) {
    res.send("Help!!!!!!");
});

module.exports = router;