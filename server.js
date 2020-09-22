
const express  = require('express')
, session  = require('express-session')
, cookieParser = require('cookie-parser')
, bodyParser = require('body-parser')
, morgan = require('morgan')
, app      = express()
, path = require('path')
, port     = process.env.PORT || 8080

, passport = require('passport')
, flash    = require('connect-flash');


require('./config/passport')(passport);

// Public
app.use(express.static(path.join(__dirname, 'public')));


app.use(morgan('dev')); 
app.use(cookieParser()); 
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.set('view engine', 'ejs'); 

app.use(session({
	secret: 'shuuuut',
	resave: true,
	saveUninitialized: true
 } )); 
app.use(passport.initialize());
app.use(passport.session()); // persiste login sessions
app.use(flash()); 

// Routes
require('./app/routes.js')(app, passport); 

app.listen(port);
console.log('Tourne sur le port ' + port);
