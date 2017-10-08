/**
 * Routes of the application
 */

module.exports =  function(app) {

	app.get('/', function(req, res) {
		res.json({success: true, message: 'Minimum Node Setup'});
	});

	
	app.get('/*', function(req, res) {
		res.status(404);
		res.json({success: false, message: '404. Page not found.'});
	});
}