var express = require('express');
var morgan = require('morgan');
var app = express();
var port = process.env.PORT || 8000;

//middleware
app.use(morgan());

app.use(express.static(__dirname + '/client/'));
app.listen(port);
console.log('server is running on port ' + port);
