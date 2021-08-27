//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// This post method will add the two numbers (num1 and num2) and show the answer in the input box in Calculator app:
app.post("/", (req, res) => {
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var result = num1 + num2;

  res.send("The result of this calculation is " + result);
});

// BMI calculator
app.post("/bmicalculator.html", function (req, res) {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  var BMI = weight / Math.pow(height, 2);

  res.send("Your BMI is " + BMI);
});

app.get("/bmicalculator.html", (req, res) => {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
