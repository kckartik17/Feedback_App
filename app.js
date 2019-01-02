const express = require("express");
const session = require("express-session");
const passport = require("passport");


//Passport Config
require("./config/paspport")(passport);

const app = express();

//Load routes
const auth = require("./routes/auth");
const index = require("./routes/index");

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
