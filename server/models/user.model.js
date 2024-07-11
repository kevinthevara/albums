import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    pwd: {
        type: String,
        required: true,
        minlength: 6,
    }
})

const User = mongoose.model("User", userSchema);

export default User;