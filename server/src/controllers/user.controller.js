import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { body } from "express-validator"; 

//registering a new user controller
export const registerUser = asyncHandler( async(req,res)=> {{

}})

export { registerUser };