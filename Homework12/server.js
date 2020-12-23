// let http = require('http');
// let url = require('url');
//
// let static = require('node-static');
// let file = new static.Server('.', {
//   cache: 0
// });
//
// function accept(req,res) {
//
//     if(req.url == '/index.html') {
//       file.serve(req,res);
//     } else {
//       file.serve(req,res)
//     }
// }
//
//
// if (!module.parent) {
//   http.createServer(accept).listen(8080);
//   console.log('start');
// } else {
//   exports.accept = accept
// }

// 2 Task

let http = require('http');
let url = require('url');

let static = require('node-static');
let file = new static.Server('.', {
  cache: 0
});

function accept(req,res) {

    if(req.url == '/books.json') {
      file.serve(req,res);
    } else {
      file.serve(req,res)
    }
}


if (!module.parent) {
  http.createServer(accept).listen(8080);
  console.log('start');
} else {
  exports.accept = accept
}
