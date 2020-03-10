var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// define the schema for our reservation model
var reservationSchema = Schema(
  {
    rut: { type: String, default: "", required: true },
    name: { type: String, default: "", required: true },
    lastname: { type: String, default: "", required: true },
    age: { type: String, default: "", required: true },
    email: { type: String, default: "", required: true },
    speciality: { type: String, default: "", required: true },
    reservation_date: { type: String, default: "", required: true },
    reservation_time: { type: String, default: "", required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    deleted: { type: Boolean, default: false }
  },
  { collection: "reservation", usePushEach: true }
);

// HOOKS
// reservationSchema.pre("save", function(next) {});

// create the model for reservations and expose it to our app
module.exports = mongoose.model("reservation", reservationSchema);
