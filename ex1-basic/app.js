//================================================================
// 0126
//================================================================
let connect = require("connect");
let app = connect();
app.listen(3000);

app.use("/index", function(req, res, next){
    
    res.setHeader("Content-Type", "text/html; charset=UTF8");
    
    // res.write("Index Page");
    res.end("Index Page");
});

app.use("/hello", function(req, res, next){
    res.setHeader("Content-Type", "text/html; charset=UTF8");
    res.end("Hello Page");
});

console.log("서버가 시작되었습니다. http://localhost:3000/");