var express = require("express");
var router = express.Router();
var reservationController = require("../controllers/reservations");

/* POST reservation */
router.post("/", function(req, res, next) {
  reservationController.reservation_create(req, res, next);
});

// Get users
router.get("/", function(req, res, next) {
  reservationController.all_users(req, res, next);
});

module.exports = router;
