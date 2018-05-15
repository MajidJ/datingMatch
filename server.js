const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const apiRoutes = require(path.join(__dirname, "/app/routing/apiRoutes"));
const htmlRoutes = require(path.join(__dirname, "/app/routing/htmlRoutes"));
apiRoutes(app);
htmlRoutes(app);

 
app.listen(PORT, function() {
    console.log("Listening on " + PORT);
    console.log(__dirname);
});

