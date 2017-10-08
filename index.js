/**
 * Minimum Node Server Setup
 */
const app = require('express')();
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const router = require('./router');


/**
 * Setup app to return only json and work on port 5000
 */
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.options("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.sendStatus(200);
});

console.log(router);

router(app);



/**
 * Listen server
 */
http.listen(app.get('port'), function() {
	console.log('Server Live on port 5000');
});