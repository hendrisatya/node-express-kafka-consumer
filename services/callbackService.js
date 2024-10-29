import callbackRepository from "../repositories/callbackRepository.js";

const processCallback = async (uuid, orderId, data) => {
  console.log(`Processing callback with UUID: ${uuid}, Order ID: ${orderId}`);
  console.log("Callback data: ", data);

  const callbackData = { uuid, orderId, data };
  return await callbackRepository.saveCallback(callbackData);

  //   return { content: data, status: "gut" };
};

export default { processCallback };
