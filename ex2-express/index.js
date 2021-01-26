// let app = express();
// let port = 3000;

// app.listen(port);

// app.use("/index", (req, res, next) => {
//     res.setHeader("Content-Type", "text/html; charset=UTF8");
//     res.end("시작 페이지");
// });

//================================================================

// HTTP
// - networking
// - requet, response
// - event
// - listening

// CONNECT
// - middleware
// - static
// - bodyParser
// - ...

// EXPRESS
// - routing
// - template view engine
// -  web framewrok...

//================================================================

const http = require("http");
const express = require("express");
const { listenerCount } = require("events");

let app = express();
let server = http.createServer(app);
server.listen(3000);

app.use("/index", (req, res, next) => {

});