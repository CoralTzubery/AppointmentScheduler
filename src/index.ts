import "dotenv/config";
import { createServer } from "http";
import mongoose from "mongoose";
import app from "./app";

const server = createServer(app);
const port = process.env.PORT || 8090;

async function init() {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING!, {
            dbName: process.env.DB_NAME,
        });

        server.listen(port, () => console.log(`Server listening on port ${port}`));
    } catch (error) {
        console.log("Failed to connect to MongoDB", error);
        process.exit(1);
    }    
}

init();
