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

let fs = require("fs");
let http = require("http");

fs.readFile("./js/test.js", "utf8", (err, data) => {
    console.log(data);
}); 

let server = http.createServer();
server.on("request", (request, response)=>{
    console.log("요청이 ...");
});
server.listen(3000);