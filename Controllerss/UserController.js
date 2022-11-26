import User from "../models/UserModel.js";

export const updateUser = async (req ,res ,next) =>{
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateUser)

    } catch (err) {
        res.status(500).json(err)
        console.log("An error has occurred")
    }

}

export const deleteUser = async (req ,res ,next) =>{
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteUser)

    } catch (err) {
        res.status(500).json(err)
        console.log("An error has occurred")
    }

}

export const getSingleUser = async (req ,res ,next) =>{
    try {
        const getSingleUser = await User.findById(req.params.id)
        res.status(200).json(getSingleUser)

    } catch (err) {
        res.status(500).json(err)
        console.log("An error has occurred")
    }

}

export const getAllUser = async (req ,res ,next) =>{
    try {
        const getAllUser = await User.find()
        res.status(200).json(getAllUser)

    } catch (err) {
        next(err)
        console.log("An error has occurred")
    }

}