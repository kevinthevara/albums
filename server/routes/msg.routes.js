import express from 'express';
import { sendMsg } from "../controllers/auth.controller.js";

const router = express.router();

router.post("/send/:id", sendMsg);

export default router;