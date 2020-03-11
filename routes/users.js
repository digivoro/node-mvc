var express = require("express");
var router = express.Router();
var userController = require("../controllers/users");

/* POST user */
router.post("/", function(req, res, next) {
  userController.user_create(req, res, next);
});

// Get users
router.get("/", function(req, res, next) {
  userController.all_users(req, res, next);
});

module.exports = router;
