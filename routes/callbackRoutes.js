import express from "express";
import { handleCallback } from "../controllers/callbackController.js";

const router = express.Router();

router.post("/svc-callback", handleCallback);

export default router;
