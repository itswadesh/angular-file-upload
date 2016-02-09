var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty();

app.use(multiparty({
    uploadDir: './uploads',
    fileName: 'xxx'
}));

app.post('/upload', multipartyMiddleware, function(req, resp) {
  console.log(req.body, req.files);
});

app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 3000);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
