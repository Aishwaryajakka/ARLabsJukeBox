var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const fs = require('fs')

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.use(express.static(path.join(__dirname, 'public')))

// view engine setup
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"/public/index.html"))
})

app.get("/play",function(req,res){
  res.sendFile(path.join(__dirname,"/public/play.html"))
})


// //Play Video
// app.get('/video', function(req, res) {
//     const path = 'videos/SampleVideo.mp4'
//     const stat = fs.statSync(path)
//     const fileSize = stat.size
//     const range = req.headers.range
  
//     if (range) {
//       const parts = range.replace(/bytes=/, "").split("-")
//       const start = parseInt(parts[0], 10)
//       const end = parts[1]
//         ? parseInt(parts[1], 10)
//         : fileSize-1
//       //Create Chunks
//       const chunksize = (end-start)+1
//       const file = fs.createReadStream(path, {start, end})
//       const head = {
//         'Content-Range': `bytes ${start}-${end}/${fileSize}`,
//         'Accept-Ranges': 'bytes',
//         'Content-Length': chunksize,
//         'Content-Type': 'video/mp4',
//       }
  
//       res.writeHead(206, head)
//       file.pipe(res)
//     } else {
//       const head = {
//         'Content-Length': fileSize,
//         'Content-Type': 'video/mp4',
//       }
//       res.writeHead(200, head)
//       fs.createReadStream(path).pipe(res)
//     }
//   })
module.exports=app;

