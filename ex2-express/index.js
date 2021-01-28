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
// 0126
//================================================================
// const http = require("http");
// const express = require("express");
// const { listenerCount } = require("events");

// let app = express();
// let server = http.createServer(app);
// server.listen(3000);

// app.use("/index", (req, res, next) => {
//     res.end("Hello Index");
// });

//================================================================
// 0128
//================================================================
// const http = require("http");
// const express = require("express");
// const homeController = require("./controllers/HomeController");

// let app = express();
// app.set("view engine", "ejs"); // view 설정
// let server = http.createServer(app);
// server.listen(3000);
// console.log("서버가 시작되었습니다...");

// // app.use("/index", homeController.index);
// // app.use("/help", homeController.help);
// app.use("/", homeController); // 이렇게 하면 루트에 대한 매핑을 알아서 함

//================================================================
const http = require("http");
const express = require("express");
const homeController = require("./controllers/HomeController");
const path = require("path");
const { ENGINE_METHOD_NONE } = require("constants");

// console.log(__dirname);
// console.log(__filename);

let app = express();
app.set("views", path.join(__dirname, "views")); // 디렉토리 설정
app.set("view engine", "ejs"); // view 설정
let server = http.createServer(app);
server.listen(3000);
console.log("서버가 시작되었습니다...");

app.use("/", homeController); 