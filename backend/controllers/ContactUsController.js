const ContactUs = require("../models/ContactUsSchema");

exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await ContactUs.find({});
        res.status(200).json({
            success: true,
            message: "Contacts fetched successfully.",
            data: contacts
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to fetch contacts."
        });
    }
};

exports.deleteContact = async (req, res) => {
    const contactID = req.params.contactID;

    try {
        await ContactUs.findByIdAndDelete(contactID);

        res.status(200).json({
            success: true,
            message: "Contact deleted successfully.",
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to delete contact."
        });
    }
};