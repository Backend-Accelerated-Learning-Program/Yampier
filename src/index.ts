import * as dotenv from 'dotenv'
import app from "./app";
import mongoose from "mongoose";

dotenv.config({path:'../.env'})

const options = {
    dbName: process.env.DB_NAME!
}

mongoose.connect(process.env.MONGO_URL!, options).then(()=>{
    console.log('connected to database...');
    app.listen(process.env.PORT);
})