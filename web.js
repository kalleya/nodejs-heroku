var express = require("express");
var app = express();
app.use(express.logger());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index.ejs', {
		title: "NodeJS @ Heroku",
		heading: "hello world",
		something: "Simple NodeJS app running on Heroku.",
		layout: false
	});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});