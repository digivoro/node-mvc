var Reservation = require("../models/reservations");

exports.reservation_create = function(req, res, next) {
  if (req.body) {
    let items = req.body;
    Reservation.create(items, function(err, newReservations) {
      if (err) return res.json({ error: err });
      res.json(newReservations);
    });
  } else {
    res.json({ status: "ERROR", message: "Debe completar todos los campos" }); //opcional mandar un mensaje de error
  }
};
