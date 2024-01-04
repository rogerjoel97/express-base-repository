import "reflect-metadata";
import express from "express";
import { InversifyExpressServer } from "inversify-express-utils";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, Express with Inversify!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
