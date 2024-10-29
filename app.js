import dotenv from "dotenv";
import express from "express";
import initializeConsumers from "./initConsumers.js";
import callbackRoutes from "./routes/callbackRoutes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(callbackRoutes);

// start the consumer
initializeConsumers();

app.listen(port, () => {
  console.log("App is listening at port: ", port);
});
