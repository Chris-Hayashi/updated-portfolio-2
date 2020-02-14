const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

// Parse application body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var routes = require("./routes/htmlRoutes");
// app.use(routes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});