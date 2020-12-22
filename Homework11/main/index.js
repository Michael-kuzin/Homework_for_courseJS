// 1 Task
const http = require("http");
let os = require('os')
const path = require('path');


http.createServer(function(request, response) {
    console.log('listen on port 5000');
    console.log(os.userInfo());
    let filename = path.basename(__filename);
    let dirname = path.dirname(__dirname);
    let sec = os.uptime();
    let min = sec / 60;
    min = Math.floor(min);
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    response.write("<h2>System Information</h2>");
    response.write(`Current user name:${os.userInfo().username}<br>`);
    response.write(`OS type:${os.type()}<br>`);
    response.write(`System work time:${min} minutes <br>`);
    response.write(`Current work directory:${dirname}<br>`);
    response.write(`Server file name:${filename}<br>`);
    response.end();
}).listen(5000);

// 2 Task
// const http = require("http");
// let greatings = require('./personalmodule.js');
//
//
// http.createServer(function(request, response){
//     console.log('listen on port 8000');
//     response.write(greatings)
//     response.end();
// }).listen(8000);
