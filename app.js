var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var handlebars = require("express-handlebars");

var home = require('./routes/home');
var resume = require('./routes/resume');
var cpp = require('./routes/cpp');
var csharp = require('./routes/csharp');
var java = require('./routes/java');
var arduino = require('./routes/arduino');

var app = express();

// view engine setup
app.engine('hbs', handlebars({defaultLayout : 'layout', extname : 'hbs', 
  layoutsDir : path.join(__dirname, 'views', 'layouts'),
  partialsDir : path.join(__dirname, 'views', 'partials'),
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/index', function(req, res, next)
{
  res.redirect('/');
});

app.use('/', home);
app.use('/resume', resume);
app.use('/cpp', cpp);
app.use('/csharp', csharp);
app.use('/java', java);
app.use('/arduino', arduino);

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