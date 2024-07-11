import User from "../models/user.model";

export const login = async (req, res) => {
    try {
        const {fullName, username, pwd, cfmPwd} = req.body;

        if (pwd !== cfmPwd) {
            return res.status(400).json({error: "passwords don't match"});
        }

        const user = await User.findOne({username});

        if (user) {
            return res.status(400).json({error: "Username already exists"})
        }

        pfp = `https://avatar.iran.liara.run/username?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            pwd,
            profilePic: pfp,
        });

        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.pfp,
        });

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