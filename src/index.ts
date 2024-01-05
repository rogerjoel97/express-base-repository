import "reflect-metadata";
import express from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import MongoConection from "./modules/DataBase/infrastructure/Conections/MongoConection";

const app = express();
const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
  res.send("Hello, Express with Inversify!");
});

// Start the server only after the database connection is established
async function startServer() {
  try {
    await MongoConection.connect();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

startServer();


