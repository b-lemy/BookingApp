import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();


//CREATE

router.post("/", async (req, res) => {
    const newHotel = new Hotel(req.body)
    console.log(newHotel)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)

    } catch (err) {
        res.status(500).json(err)
        console.log("An error has occurred")
    }

})

//UPDATE

router.put("/:id", async (req, res) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedHotel)

    } catch (err) {
        res.status(500).json(err)
        console.log("An error has occurred")
    }
})
//DELETE

router.delete("/:id", async (req, res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted")

    } catch (err) {
        res.status(500).json(err)
        console.log("An error has occurred")
    }
})

//GET
router.get("/:id", async (req, res,next) => {
    try {
        await Hotel.findById(req.params.id)
        res.status(200).json("Hotel you ordered")

    } catch (err) {
        next(err)
    }
})
//GET ALL
{

    router.get("/", async (req, res) => {
        try {
            const hotels = await Hotel.find()
            res.status(200).json(hotels)

        } catch (err) {
            res.status(500).json(err)
            console.log("An error has occurred")
        }
    })
}


router.get("/", (req, res) => {
    res.send("Hello this is auth endpoint")
})

router.get("/register", (req, res) => {
    res.send("Hello this is auth register endpoint")
})

export default router