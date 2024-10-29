import dotenv from "dotenv";
import { Kafka } from "kafkajs";

dotenv.config();

const kafka = new Kafka({
  clientId: process.env.KAFKA_CLIENT_ID,
  brokers: [process.env.KAFKA_BROKER],
});

export const createConsumer = (groupId) => kafka.consumer({ groupId });
