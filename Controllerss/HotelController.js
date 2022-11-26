import Hotel from "../models/HotelModel.js";


export const createHotel = async (req ,res ,next) =>{
    const newHotel = new Hotel(req.body)
    console.log(newHotel)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)

    } catch (err) {
        next(err)
        console.log("An error has occurred")
    }

}

export const updateHotel = async (req ,res ,next) =>{
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedHotel)

    } catch (err) {
        res.status(500).json(err)
        console.log("An error has occurred")
    }

}

export const deleteHotel = async (req ,res ,next) =>{
    try {
        const deleteHotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteHotel)

    } catch (err) {
        res.status(500).json(err)
        console.log("An error has occurred")
    }

}

export const getSingleHotel = async (req ,res ,next) =>{
    try {
        const getSingleHotel = await Hotel.findById(req.params.id)
        res.status(200).json(getSingleHotel)

    } catch (err) {
        res.status(500).json(err)
        console.log("An error has occurred")
    }

}

export const getAllHotel = async (req ,res ,next) =>{
    try {
        const getAllHotel = await Hotel.find()
        res.status(200).json(getAllHotel)

    } catch (err) {
        next(err)
        console.log("An error has occurred")
    }

}