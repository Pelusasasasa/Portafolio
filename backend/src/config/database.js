import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';
        mongoose.connect(mongoURI);
        console.log("Base de datos conectada");
    } catch (error) {
        console.log(error);
        process.exit(1);
    };
};

export default connectDB;