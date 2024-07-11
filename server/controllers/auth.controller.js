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
    } catch (error) {

    }
}

export const logout = (req, res) => {
    console.log("logoutUser");
}

export const signup = (req, res) => {
    console.log("signupUser");
}