const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const routes = require("./routes/apiroute");
const port = process.env.PORT || "5000";
const url = process.env.URL;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Connection to Database
mongoose
  .connect(url)
  .then(() => {
    console.log("Database Connection Successful");
  })
  .catch((err) => {
    console.log(`Database connection failed because of ${err}`);
  });

app.use("/", routes);

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});
