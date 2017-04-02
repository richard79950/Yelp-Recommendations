var express = require("express")
var bodyParser = require('body-parser')
var app = express()

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// token
const token = require("./js/token.js")
token.get_token(app)
app.get("/api/search", token.searchRestaurants)
app.get("/", function(req, res) {
	res.sendfile("index.html")
})

var port = process.env.PORT || 8080

app.use(express.static(__dirname + "/js"));

app.listen(port, function() {
	console.log("App running at localhost:" + port)
})
