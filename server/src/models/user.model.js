import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            minlength: [3, "First name must be at least 3 characters long"]
        },
        lastName: {
            type: String,
            minlength: [3, "Last name must be at least 3 characters long"]
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minlength: [5, "Email must be at least 5 characters long"]
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String
    }
}, {
    timestamps: true
})

userSchema.pre("save", async function(){
    if (!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.generateAuthToken = function() {
    return jwt.sign({
        _id: this._id,
        email: this.email
    },
    process.env.JWT_SECRET, 
    )
}

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password);
}

// userSchema.statics.hashPassword = async function (password) {
//     return await bcrypt.hash(password, 10);
// }

export const User = mongoose.model("User", userSchema);