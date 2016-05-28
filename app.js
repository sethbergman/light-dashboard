var express = require('express');
var favicon = require('serve-favicon');
var app = express();

app.use(favicon(__dirname + '/assets/img/favicon.ico'));
app.use('/assets', express.static(__dirname + '/assets'));


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('dashboard');
});

app.get('/dashboard', function(request, response) {
  response.render('dashboard');
});

app.get('/user', function(request, response) {
  response.render('user');
});

app.get('/table', function(request, response) {
  response.render('table');
});

app.get('/icons', function(request, response) {
  response.render('icons');
});

app.get('/maps', function(request, response) {
  response.render('maps');
});

app.get('/notifications', function(request, response) {
  response.render('notifications');
});

app.get('/template', function(request, response) {
  response.render('template');
});

app.get('/typography', function(request, response) {
  response.render('typography');
});

var server = app.listen(process.env.PORT | 5000, function () {
  console.log('Server running at http://0.0.0.0:' + server.address().port)
})
