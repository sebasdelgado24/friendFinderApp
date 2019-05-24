//DEPENDENCIES
//Path package to get the correct file path for our html
var path = require("path");

//ROUTING
module.exports = function(app) {
//HTML GET Requests
// The code below handles when the users visit a page.
// On each of the cases below the user is shown an HTML page of content

app.get("", function(req, res) {
  res.sendFile(path.join(__dirname, ""));    
});

app.get("", function(req, res) {
    res.sendFile(path.join(__dirname, ""));    
});

//If no matching route is found default to home
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, ""))
});
};




