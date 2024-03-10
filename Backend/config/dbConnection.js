import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("db connected :", connect.connection.host, connect.connection.name);
    } catch(e) {
        console.log(e);
    }
}

export default connectDB;