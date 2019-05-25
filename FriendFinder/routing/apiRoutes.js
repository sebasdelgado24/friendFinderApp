// LOAD DATA
// Routes are linked to a series of "data" sources.
// These data sources hold arrays of information on friends.js.

var friendsData = require("../data/friends");

// ROUTING

module.exports = function(app) {
 //API GET Requests
 //The code below handles when users visit a page.
 //In each of the below cases when a user visits a link
 //for example localhost:PORT/api/admin... they are shown a JSON of the data in the table)

 app.get("/api/fiends", function(req, res) {
   res.json(friendsData);
 });

}