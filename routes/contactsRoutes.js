import express from "express";
const router = express.Router();
import {
    getContact,
    createContact,
    updateContact,
    deleteContact,
    getContacts,
} from "../controllers/contactcontroller.js";

router.route("/").get(getContacts).post(createContact);
router.route("/:id").put(updateContact).get(getContact).delete(deleteContact);

export default router;
