import express from 'express';
import { sendMsg } from "../controllers/auth.controller.js";
import protectRoute from '../middleware/protectRoute.js';

const router = express.router();

router.post("/send/:id", protectRoute, sendMsg);

export default router;