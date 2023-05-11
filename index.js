import express from 'express';
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.js';
import authRoute from './routes/auth.js';

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log('MongoDB connected');
    }).catch((err) => {
        console.log(err);
    });

app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

app.listen(process.env.PORT || 8080, () => {
    console.log('Server is running on port 8080');
});