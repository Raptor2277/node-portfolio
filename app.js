var request = require("request");

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var handlebars = require("express-handlebars");

var home = require('./routes/home');
var cpp = require('./routes/cpp');
var csharp = require('./routes/csharp');
var java = require('./routes/java');
var arduino = require('./routes/arduino');
var opengl = require('./routes/opengl');

var solarSystem = require('./routes/solarSystem');
var rubiksSube = require('./routes/rubiksCube');

var app = express();

// view engine setup
app.engine('hbs', handlebars({
  defaultLayout: 'layout', extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//send post to private app to log access to this website
app.use(function (req, res, next) {
  var ip = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;

    request.post('http://nitchii-logger.azurewebsites.net/' + ip + req.path);

    next();
});

app.get('/index', function (req, res, next) {
  res.redirect('/');
});

app.use('/', home);
app.use('/cpp', cpp);
app.use('/csharp', csharp);
app.use('/java', java);
app.use('/arduino', arduino);
app.use('/opengl', opengl);
app.use('/solar_system', solarSystem);
app.use('/rubiks_cube', rubiksSube);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;