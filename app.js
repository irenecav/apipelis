var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var directoresRouter = require('./routes/directores')
var peliculaesRouter = require('./routes/peliculas')

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/**
 * DB conection
 */
require('./lib/connectMongoose')
require('./models/Director')

app.use((req, res, next)=>{
  console.log('recibimos una petición ')

  next()
  })

  /**
   *  API router
   */
app.use('/director', directoresRouter )
app.use('/pelicula', peliculaesRouter)
  
// catch 404 and forward to error handler

app.use(function(req, res, next) {
  var err = new Error('No existe la ruta');
  err.status = 404;
  next(err);
});

// error handler

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err.message);
});

module.exports = app;
