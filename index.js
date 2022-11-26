// const express =require("express")

import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import roomRoute from "./routes/roomRoutes.js"
import hotelRoute from "./routes/hotelRoutes.js"
import authRoute from "./routes/authRoutes.js"
import userRoute from "./routes/userRoutes.js"
import cookieparser from "cookie-parser"


const app = express();
dotenv.config();


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to database")
    } catch (error) {
        // throw error;
        console.log("something")
    }
}
//
// app.get("/", (req, res) => {
//     res.send("This is the index file")
// })

//middleware

app.use((req, res, next) => {
    console.log("I run first")
    next()

    /*if there is another function below for your app to not crush write return next()*/
})
app.use(cookieparser())
app.use(express.json())

app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/hotel", hotelRoute);
app.use("/room", roomRoute);
//
app.use((err, req, res, next) => {
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