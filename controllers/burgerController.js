const express = require("express");

var router = express.Router();

const burger = require("../models/burger.js");

//get and post functions are not in line with cats syntax, yet.
//Handle get:
router.get("/", (req, res) => {
  connection.query("SELECT * FROM blank", (err, data) => {
    if (err) throw err;
    // console.log("The solution is: ", data);
    // return res.send(data);
    res.render("index", { wishes: data });
  });
});

//Handle post:
router.post("/", (req, res) => {
  connection.query("INSERT INTO blanks (blank) VALUES (?)", [req.body.blank], (err, result) => {
    if (err) throw err;

    res.redirect("/");
  });
});
