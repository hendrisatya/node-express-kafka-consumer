import Callback from "../models/Callback.js";

const saveCallback = async (callbackData) => {
  try {
    const callback = await Callback.create(callbackData);
    return callback;
  } catch (error) {
    console.error("Error saving callback:", error);
    throw error;
  }
};

const getCallbackByUUID = async (uuid) => {
  try {
    return await Callback.findByPk(uuid);
  } catch (error) {
    console.error("Error fetching callback:", error);
    throw error;
  }
};

export default {
  saveCallback,
  getCallbackByUUID,
};
