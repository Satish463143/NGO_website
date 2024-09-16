const ContactUs = require("../models/ContactUsSchema");

exports.addContact = async (req, res) => {
    try {
        const { name, email, number, message } = req.body;

        const newContactUs = new ContactUs({
            name,
            email,
            number,
            message
        });
        await newContactUs.save();

        res.status(200).json({
            success: true,
            message: "New contact added succesfully."
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to add."
        });
    }
};

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
    console.log(contactID)

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