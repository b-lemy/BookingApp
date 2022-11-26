import express from "express";

import {createHotel, deleteHotel, getAllHotel, getSingleHotel, updateHotel} from "../Controllers/HotelController.js";

const router = express.Router();


//CREATE

router.post("/", createHotel);

//UPDATE
router.put("/:id", updateHotel);
//DELETE

router.delete("/:id", deleteHotel);

//GET
router.get("/:id", getSingleHotel);
//GET ALL
router.get("/", getAllHotel);



router.get("/", (req, res) => {
    res.send("Hello this is auth endpoint")
})

router.get("/register", (req, res) => {
    res.send("Hello this is auth register endpoint")
})

export default router