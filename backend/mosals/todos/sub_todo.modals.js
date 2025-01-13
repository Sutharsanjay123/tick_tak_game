import mongoose from "mongoose"
const userSchema = new  mongoose.schema({})

export const User = mongoose.model("User" , userSchema) 