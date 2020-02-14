var express = require("express");
var path = require("path");

var router = express.Router();

router.get("/", function(req, res) {  
    res.render("home");
});

router.get("/portfolio", function(req, res) {
    res.render("portfolio");
});

router.get("/contact", function(req, res) {
    res.render("contact");
});

module.exports = router;