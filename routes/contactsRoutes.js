const express =require("express");
const router =express.Router();
const {
    getContact,
    createContact,
    updateContact,
    deleteContact,
    getContacts,
} =require ("../controllers/contactcontroller");

router.route("/").get(getContacts).post(createContact);
router.route("/:id").put(updateContact).get(getContact).delete(deleteContact);

module.exports=router;