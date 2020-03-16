var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var indexRouter = require("./routes/index");
var horasRouter = require("./routes/horas");
var usersRouter = require("./routes/users");
var reservationsRouter = require("./routes/reservations");
var app = express();

//Import the mongoose module
var mongoose = require("mongoose");

//Set up default mongoose connection
var mongoDB = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/test";
console.log("Connecting to database...");
mongoose.connect(mongoDB, { useNewUrlParser: true });

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// cors
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRouter);
app.use("/horas", horasRouter);
app.use("/users", usersRouter);
app.use("/reservations", reservationsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

var port = process.env.PORT || 3000;
console.log("The magic happens on port " + port + " http://localhost:3000/");
module.exports = app;
