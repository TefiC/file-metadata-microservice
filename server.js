var express = require('express');
var multer = require("multer");
var path = require('path');

var upload = multer({dest:'uploads'});

var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.post('/uploads', upload.single('file-input'), function(req, res) {
    if (req) {
        
        var data = {
            'File Size': req.file["size"].toString() + ' ' + 'bytes'
        }
        
        res.send(JSON.stringify(data));
        
    } else {
        
        res.send('There was an error uploading the file');
        
    }
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port!');
})