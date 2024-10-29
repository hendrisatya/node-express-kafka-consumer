import { createConsumer } from "./kafkaConsumerService.js";

const consumerA = createConsumer("groupA");

const runConsumerA = async () => {
  await consumerA.connect();
  console.log("Consumer A connected");

  await consumerA.subscribe({ topic: "topicA", fromBeginning: true });

  await consumerA.run({
    eachMessage: async ({ topic, partition, message }) => {
      const messageContent = message.value.toString();
      console.log(`Consumer A received message: ${messageContent}`);
      // Process message for topicA
    },
  });
};

export default runConsumerA;
