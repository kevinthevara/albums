import User from "../models/user.model";
import bcrypt from 'bcryptjs';

export const login = async (req, res) => {
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

export const logout = (req, res) => {
    console.log("logoutUser");
}

export const signup = (req, res) => {
    console.log("signupUser");
}