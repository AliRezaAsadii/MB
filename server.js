"use strict";

const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });
const app = require("./app");

const startServer = (isDB) => {
  const port = process.env.PORT || 3000;
  app.listen((port) => {
    isDB
      ? console.log("Server successfully started with DB")
      : console.log("Server successfully started without DB");
  });
};

if (process.env.DATABASE) {
  if (!process.env.DATABASE_PASSWORD) {
    throw new Error("Database_password does not exist!");
  }

  const DB = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
  );

  mongoose
    .connect(DB, {})
    .then(console.log("DB connection successful!"))
    .catch((err) => console.log(`DB does not connect. Error: ${err}`));

  startServer(true);
} else {
  startServer(false);
}
