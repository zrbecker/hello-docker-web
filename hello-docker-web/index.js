var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
  res.send('<p>Hello World!');
});

app.use(function(req, res, next) {
  res.status(404);
  res.send('<h1>404 - Not Found');
});

app.use(function(error, req, res, next) {
  console.error(error.stack);
  res.status(500);
  res.send('<h1>500 - Server Error');
});

app.listen(app.get('port'), function() {
  console.log('Server listening on port ' + app.get('port'));
});
