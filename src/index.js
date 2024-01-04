import sequelize from "./utils/db.js";
import express from "express";
import "dotenv/config";

const app = express();
const port = 5000;

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
