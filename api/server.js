import express  from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import gigRouter from './routes/gig.route.js';
import orderRouter from './routes/order.route.js';
import conversationRouter from './routes/conversation.route.js';
import messageRouter from './routes/message.route.js';
import reviewRouter from './routes/review.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(express.json()); 
app.use(cookieParser());
app.use(cors());

async () => { }
try {
    mongoose.connect('mongodb+srv://suryansh1016star:CnYE5277Ip7rxtus@freelance.guyfu7i.mongodb.net/');
    console.log("server connected to mongodb")
} catch (error) {
    console.log(error)
};

app.use("/api/users" , userRouter);
app.use("/api/gigs" , gigRouter);
app.use("/api/orders" , orderRouter);
app.use("/api/conversations" , conversationRouter);
app.use("/api/messages" , messageRouter);
app.use("/api/reviews" , reviewRouter);
app.use("/api/auth" , authRouter);


app.use((err , req , res , next) => {
    const errorStatus = err.status || 500;
    const errorMesssage = err.message || "Something went wrong";

    return res.status(errorStatus).send({errorMesssage});
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});