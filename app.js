import dotenv from "dotenv";
import express from "express";
import callbackRoutes from "./routes/callbackRoutes.js";
import runConsumer from "./services/kafkaConsumerService.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(callbackRoutes);

// start the consumer
runConsumer().catch((error) =>
  console.error("Error in Kafka Consumer:", error)
);

app.listen(port, () => {
  console.log("App is listening at port: ", port);
});
