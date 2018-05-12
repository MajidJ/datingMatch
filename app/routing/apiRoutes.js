const path = require("path");
const friendsArray = require(path.join(__dirname, "../data/friends.js"));


apiRoutes = function(expressApp) {
    expressApp.get("/api/friends", function(req, res) {
        return res.json(friendsArray);
    });

    expressApp.post("/api/friends", function(req, res) {
        let body = {
            name: req.body.name,
            photo: req.body.photo,
            scores: req.body.scores
        }
        friendsArray.push(body);
    });   
}

module.exports = apiRoutes;