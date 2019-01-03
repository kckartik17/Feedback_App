const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const keys = require("./config/keys");

//Load Models
require("./models/User");

//Passport Config
require("./config/paspport")(passport);

const app = express();

//Mongoose Connect
mongoose
  .connect(
    keys.mongoURI,
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch("Error in connecting MongoDB database");

//Load routes
const auth = require("./routes/auth");
const index = require("./routes/index");

app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
  })
);

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//Use Routes
app.use("/", index);
app.use("/auth", auth);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
