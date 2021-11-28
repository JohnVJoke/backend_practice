var express = require("express")
var app = express();
var cors = require("cors");
app.use(cors());

app.get("/", function(request, response){
response.send("Hello, Node.js");
});

app.listen(591);