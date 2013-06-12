var express = require("express");
var app = express();
app.use(express.logger());
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', { title: 'The index page!', layout: false })
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
