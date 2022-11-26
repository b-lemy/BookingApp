import express from "express";
// import {login, register} from "../Controllers/AuthController.js";

const router =express.Router();

// router.post("/register", register);
// router.get("/login", login);

router.get("/register",(req, res)=>{
    res.send("Hello this is auth register endpoint")
})

export default router