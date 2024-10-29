import runConsumerA from "./services/consumerAService.js";
import runConsumerB from "./services/consumerBService.js";

const initializeConsumers = async () => {
  try {
    await runConsumerA();
    console.log("Consumer A started successfully");
    await runConsumerB();
    console.log("Consumer B started successfully");
  } catch (error) {
    console.error("Error initializing consumers:", error);
  }
};

export default initializeConsumers;
