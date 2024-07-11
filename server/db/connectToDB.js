import mongoose from 'mongoose';

const connectToDB = async () => {
    try {
        console.log("Connected to Mongo DB");
    } catch (error) {
        console.log("Unable to connect to Mongo DB");
    }
}

export default connectToDB;