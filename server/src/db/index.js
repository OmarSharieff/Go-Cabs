import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
export const connnectDB = async()=> {
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`Succcessfully connected to MongoDB on host: ${connectInstance.connection.host}`);
    } catch (error) {
        console.log("Failed to establish connection to MongoDB ", error);
        process.exit(1);        
    }
}