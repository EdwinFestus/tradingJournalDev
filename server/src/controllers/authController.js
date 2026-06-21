import User from "../models/User.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const userExists = await User.findOne({email,});

        if (userExists) {
            return res.status(400).json({
                message: "User already exists"
            })
        }

        const hashedPassword = 
            await bcrypt.hash(password, 10);

        const user = await User.create({
            name, 
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            id: user._id,
            name: user.name,
            email: user.email,
        });
    } catch(err) {
        res.status(500).json({
            message: err.message,
        })
    }
}

export default registerUser