var express = require("express")
var bodyParser = require('body-parser')
var app = express()

app.use(express.static(__dirname + "/js"));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// token
const token = require("./js/token.js")
token.get_token(app)
app.get("/api/search", token.searchRestaurants)
app.get("/", (req, res) => {
	res.sendfile("index.html")
})

PORT = 8080

app.listen(PORT)
console.log("App running at localhost:" + PORT)
