// import sequelize from "./utils/db.js";
import express from "express";
import "dotenv/config";
import User from "./models/userModel.js";

const app = express();
const port = 5000;

app.get("/add", (req, res) => {
  try {
    User.create({
      name_user: "admin",
      email: "admin@gmail.com",
    }).then((data) => {
      res.send(data)
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => {
  try {
    User.findAll().then((data) => {
      res.send(data)
    });
  } catch (error) {
    console.log("error pak");
  }
});
app.listen(port, () => {
  console.log("Server running .....");
});
