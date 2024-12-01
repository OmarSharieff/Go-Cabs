import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
})
import { app } from "./app.js";
import { connnectDB } from "./db/index.js";

connnectDB()
.then(
    app.listen(process.env.PORT, ()=> {
        console.log(`Server is listening at port ${process.env.PORT}`);
    })
)
.catch(
    (error) => {
        console.error("Failed to run server :(");
    }
)