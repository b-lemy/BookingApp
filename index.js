// const express =require("express")

import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import roomRoute from "./routes/rooms.js"
import hotelRoute from "./routes/hotels.js"
import userRoute from "./routes/users.js"


const app = express();
dotenv.config();


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to database")
    } catch (error) {
        throw error;
    }
}
//
// app.get("/", (req, res) => {
//     res.send("This is the index file")
// })

//middleware

app.use((req,res,next) =>{
    console.log("I run first")
    next()

    /*if there is another function below for your app to not crush write return next()*/
})

app.use(express.json())


app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/hotel", hotelRoute);
app.use("/room", roomRoute);

app.use((err,req,res,next) =>{
     const errorStatus = err.status || 500
    const errorMessage = err.status || "Error from Handlers"
    return res.status(errorStatus).json(errorMessage)
    // console.log("Error from handlers")
    /*if there is another function below for your app to not crush write return next()*/
})


app.listen(8800, () => {
    connect()
    console.log("Connected to backend");
})