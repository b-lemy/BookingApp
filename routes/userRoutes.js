import express from "express";
import {deleteUser, getSingleUser, updateUser} from "../Controllerss/UserController.js";
import {getAllHotel} from "../Controllerss/HotelController.js";

const router =express.Router();


//UPDATE
router.put("/:id", updateUser);
//DELETE

router.delete("/:id", deleteUser);

//GET
router.get("/:id", getSingleUser);
//GET ALL
router.get("/", getAllHotel);



//
// router.get("/",(req, res)=>{
//     res.send("Hello this is auth endpoint")
// })
//
// router.get("/register",(req, res)=>{
//     res.send("Hello this is auth register endpoint")
// })

export default router