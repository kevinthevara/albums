import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.routes.js";
import msgRoutes from "./routes/msg.routes.js";
import connectToDB from './db/connectToDB.js';
import cookieParser from 'cookie-parser';


const app = express();

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', msgRoutes);

// app.get("/", (req, res) => {
//     res.send("Hello world!");
// });

app.listen(PORT, () => {
    connectToDB();
    console.log(`server is running on ${PORT}.`)
});