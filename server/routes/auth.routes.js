import express from 'express';
import { signup, login, signout } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/login', login);

router.post('/logout', signout);

router.post('/signup', signup);

export default router;