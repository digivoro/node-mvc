var User = require("../models/users");

exports.user_create = function(req, res, next) {
  if (req.body) {
    let items = req.body;
    User.create(items, function(err, newUsers) {
      if (err) return res.json({ error: err });
      res.json(newUsers);
    });
  } else {
    res.json({ status: "ERROR", message: "Debe completar todos los campos" }); //opcional mandar un mensaje de error
  }
};
