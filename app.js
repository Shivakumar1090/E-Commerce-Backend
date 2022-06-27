const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require('cors');
const app = express();
const dbURI = require('./Config/Key');

const connectDB = async () => {
    await mongoose
      .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log("MongoDB Connected"))
      .catch((err) => console.log(err));
  };
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Express body parser
app.use(express.urlencoded({ extended: true }));

//using middle wears
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(morgan("dev"));

app.use("/" , (req,res) => {
    res.send("hi");
});

app.listen("5000", () => console.log("sever is running on 5000"));