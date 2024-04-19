import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config();

const Connection = () => {
    
    const DB_URI = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-o9y4qim-shard-00-00.qs1kgkl.mongodb.net:27017,ac-o9y4qim-shard-00-01.qs1kgkl.mongodb.net:27017,ac-o9y4qim-shard-00-02.qs1kgkl.mongodb.net:27017/?ssl=true&replicaSet=atlas-13qsl8-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;

    try {
        mongoose.connect(DB_URI);
        console.log("Database Connected Successfully !!!");
    } catch(error) {
        console.log("Error while connecting with the database ", error.message);
    }
}

export default Connection;