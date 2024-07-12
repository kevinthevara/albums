import User from "../models/user.model";
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const {fullName, username, pwd, cfmPwd} = req.body;

        // check if passwords match
        if (pwd !== cfmPwd) {
            return res.status(400).json({error: "passwords don't match"});
        }

        // finding user
        const user = await User.findOne({username});

        if (user) {
            return res.status(400).json({error: "Username already exists"})
        }

        // Hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPwd = await bcrypt.hash(pwd, salt);


        // pfp creation and handling
        pfp = `https://avatar.iran.liara.run/username?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            pwd,
            profilePic: pfp,
        });

        if (newUser) {
            // generate JWT token
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.pfp,
            });
        } else {
            res.status(400).json({
                error: "Invalid user data"
            });
        }

    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({
            error: "Internal server error."
        })
    }
}

export const login = async (req, res) => {
    try {
        const { username, pwd} = req.body;
        const user = await User.findOne({username});
        const isPwdCorrect = await bcrypt.compare(pwd, user?.pwd || "");

        if (!user || !isPwdCorrect) {
            return res.status(400).json({error: "Invalid username or password."});
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });
         
    } catch(error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ 
            error: "internal server error" 
        });
    }
}

export const signout = async (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({
            message: "Logged out successfully"
        });
    } catch(error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({
            error: "internal server error"
        });
    }
}