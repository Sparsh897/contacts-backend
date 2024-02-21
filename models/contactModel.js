import mongoose from "mongoose";



export const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the contact name"]
    },
    email: {
        type: String,
        required: [true, "Please add the contact email "]
    },
    phone: {
        type: String,
        required: [true, "Please add the contact number"]
    }
}, {
    timestamps: true
});

const Contacts= mongoose.model("Contact", contactSchema);
export default Contacts;