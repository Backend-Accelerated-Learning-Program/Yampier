import * as dotenv from 'dotenv'
import app from "./app";
import mongoose from "mongoose";

dotenv.config({path:'../.env'})



mongoose.connect(process.env.MONGO_URL!).then(()=>{
    console.log('connected to database...');
    app.listen(process.env.PORT);
})