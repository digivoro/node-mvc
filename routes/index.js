var express = require("express");
var router = express.Router();

/* GET Home page */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Registro de Usuarios" });
});

module.exports = router;
