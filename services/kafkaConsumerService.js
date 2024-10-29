import dotenv from "dotenv";
import { Kafka } from "kafkajs";

dotenv.config();

const kafka = new Kafka({
  clientId: process.env.KAFKA_CLIENT_ID,
  brokers: [process.env.KAFKA_BROKER],
});

const consumer = kafka.consumer({ groupId: process.env.KAFKA_GROUP_ID });

const runConsumer = async () => {
  await consumer.connect();
  console.log("Kafka consumer connected");

  await consumer.subscribe({
    topic: process.env.KAFKA_TOPIC,
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const messageContent = message.value.toString();
      console.log(`Received message: ${messageContent}`);
      try {
        // Parse JSON data if needed
        const data = JSON.parse(messageContent);
        // Process data here or call other services (e.g., callbackService)
        console.log(data);
      } catch (error) {
        console.error("Error processing message:", error);
      }
    },
  });
};

export default runConsumer;
