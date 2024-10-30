import { createConsumer } from "./kafkaConsumerService.js";

const consumerB = createConsumer("groupB");

const runConsumerB = async () => {
  await consumerB.connect();
  console.log("Consumer B connected");

  await consumerB.subscribe({
    topic: process.env.KAFKA_TOPIC_B,
    fromBeginning: true,
  });

  await consumerB.run({
    eachMessage: async ({ topic, partition, message }) => {
      const messageContent = message.value.toString();
      console.log(`Consumer B received message: ${messageContent}`);
      // Process message for topicB
    },
  });
};

export default runConsumerB;
