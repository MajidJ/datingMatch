const path = require("path");
const friendsArray = require(path.join(__dirname, "../data/friends.js"));
const fs = require("fs");


apiRoutes = function(expressApp) {
    expressApp.get("/api/friends", function(req, res) {
        return res.json(friendsArray);
    });

    expressApp.post("/api/friends", function(req, res) {
        let body = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        }
        req.body.scores.map(elem => {
            body.scores.push(parseInt(elem));
        })
        friendsArray.push(body);
        fs.writeFile(path.join(__dirname, "../data/friends.js"), "const friendsArray = " + JSON.stringify(friendsArray, null, "\t") + ";\nmodule.exports = friendsArray;");
        return "Friends Data Updated";
    });   
}

module.exports = apiRoutes;