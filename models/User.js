import mongoose from "mongoose";



export const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the  name"]
    },
    email: {
        type: String,
        required: [true, "Please add the  email "],
        unique:true,
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const User= mongoose.model("user", UserSchema);
export default Contacts;