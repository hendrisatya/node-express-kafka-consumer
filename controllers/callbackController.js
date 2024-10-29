import callbackService from "../services/callbackService.js";

export const handleCallback = async (req, res) => {
  const { uuid, orderId, data } = req.body;

  try {
    const response = await callbackService.processCallback(uuid, orderId, data);

    res.status(200).json({
      message: "Callback received successfully",
      uuid,
      orderId,
      data: response,
    });
  } catch (error) {
    console.log("Error processing callback: ", error);
    res.status(500).json({ error: "Failed to process callback" });
  }
};
