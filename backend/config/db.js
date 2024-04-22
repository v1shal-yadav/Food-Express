import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://yaimvishal:8528130595@cluster0.gwzgbil.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}
