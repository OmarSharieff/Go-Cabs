import express from "express";
import cors from "cors";

const app = express();

// cross-origin-resource-sharing configuration to allow requests from one specific client webpage
app.use(cors({
    origin: process.env.CORS,
    optionsSuccessStatus: 200
}))


export {app}
