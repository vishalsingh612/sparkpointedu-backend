const ContactUs = require('../model/ContactForm');

// Create contact 
exports.submitContactForm = async(req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        const newContact = new ContactUs({ name, email, subject, message });
        await newContact.save();

        res.status(201).json({ message: 'Contact form submitted successfully.' });
    } catch (error) {
        console.error('Submit Error:', error);
        res.status(500).json({ error: 'Server error.' });
    }
};

// GET all contacts
exports.getAllContacts = async(req, res) => {
    try {
        const contacts = await ContactUs.find().sort({ createdAt: -1 }); // Prefer createdAt if timestamps are enabled
        res.status(200).json({
            message: 'Contacts fetched successfully',
            total: contacts.length,
            data: contacts
        });
    } catch (error) {
        console.error('Fetch All Error:', error);
        res.status(500).json({ error: 'Failed to fetch contact forms.' });
    }
};


// GET contact by id
exports.getContactById = async(req, res) => {
    try {
        const contact = await ContactUs.findById(req.params.id);

        if (!contact) {
            return res.status(404).json({ error: 'Contact entry not found.' });
        }

        res.status(200).json(contact);
    } catch (error) {
        console.error('Fetch By ID Error:', error);
        res.status(500).json({ error: 'Failed to fetch contact form.' });
    }
};

// DELETE contact by id
exports.deleteContactById = async(req, res) => {
    try {
        const deleted = await ContactUs.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ error: 'Contact entry not found.' });
        }

        res.status(200).json({ message: 'Contact entry deleted successfully.' });
    } catch (error) {
        console.error('Delete Error:', error);
        res.status(500).json({ error: 'Failed to delete contact form.' });
    }
};