import express from "express";

const router =express.Router();

router.post("/",(req, res)=>{
    res.send("Hello this is auth endpoint")
})

router.get("/register",(req, res)=>{
    res.send("Hello this is auth register endpoint")
})

export default router