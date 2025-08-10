//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"

// import mongoose, { connect } from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
dotenv.config({
    path:'./env'
})

connectDB()



/*
import express from "express"
const app=express()
1) With IIFE
( async () =>{
    try{
        await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}')
        app.on("errror",(error)=>{
            console.log("Error:",error);
            throw error;
        })

        app.listen(process.env.PORT,()=>{
            console.log('App is listining on port ${process.env.PORT}');
        })
    }catch(error){
        console.error("Error:",error)
        throw err
    }
})()
2) With function
async function main() {
    try {
        // Connect to MongoDB
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        // Handle app-level errors
        app.on("error", (error) => {
            console.log("Error:", error);
            throw error;
        });

        // Start the server
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

// Call the function
main();
*/