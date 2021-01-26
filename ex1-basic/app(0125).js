// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('What do you think of Node.js?', (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);

//     rl.close();
// });


//================================================================

// let test = require("./js/test");

// test.f1();


//================================================================

// let fs = require("fs");
// let http = require("http");

// fs.readFile("./index.html", "utf8", (err, data) => {
//     console.log(data);
// }); 

// let server = http.createServer();
// server.on("request", (req, res)=>{
//     // console.log("요청이 ...");
//     res.writeHead(200, {
//         "Content-Type":"text/html; charset=UTF-8", 
//     });
//     res.write("왜왜왜");
//     res.end();
// });
// server.listen(3000);

//================================================================
// let fs = require("fs");
// let http = require("http");



// let server = http.createServer();
// server.on("request", (req, res)=>{
//     fs.readFile("./index.html", "utf8", (err, data) => {
//         res.writeHead(200, {
//             "Content-Type":"text/html; charset=UTF-8", 
//         });
//         res.write(data);
//         res.end();
//     });
// });
// server.listen(3000);


//================================================================
// 0126
//================================================================

let fs = require("fs");
let http = require("http");

let server = http.createServer();
server.on("request", (req, res)=>{

    console.log(req.url);

    fs.readFile("./index.html", "utf8", (err, data) => {
        res.writeHead(200, {
            "Content-Type":"text/html; charset=UTF-8", 
        });
        res.write(data);
        res.end();
    });
});

server.listen(3000);