const express = require("express");

var router = express.Router();

const burger = require("../models/burger.js");

//get and post functions are not in line with cats syntax, yet.
//Handle get:
router.get("/", (req, res) => {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data,
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//Handle post:
router.post("/api/burgers", (req, res) => {
  burger.insertOne("burger_name", [req.body.burger_name], function (result) {
    console.log("This is the ", result);
    // Send back the ID of the new quote
    res.json(result);
  });
});

router.put("/api/burgers/:id", (req, res) => {
  var condition = "id = " + req.params.id;

  // console.log("condition", condition);

  burger.updateOne(
    {
      devoured: req.body.devoured,
    },
    condition,
    (result) => {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

router.delete("/api/burgers/:id", (req, res) => {
  var condition = "id = " + req.params.id;

  burger.delete(condition, (result) => {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
