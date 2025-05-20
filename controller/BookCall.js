const Call = require('../model/BookCall');

// Create a new call booking
exports.createCall = async(req, res) => {
    try {
        const { name, phone } = req.body;

        // Basic validation
        if (!name || !phone) {
            return res.status(400).json({ message: 'Name and phone are required.' });
        }

        const newCall = new Call({ name, phone });
        const savedCall = await newCall.save();

        res.status(201).json({ message: 'Call booked successfully.', data: savedCall });
    } catch (error) {
        console.error('Create Call Error:', error);
        res.status(500).json({ error: 'Server error while booking call.' });
    }
};

// Get all booked calls
exports.getAllCalls = async(req, res) => {
    try {
        const calls = await Call.find().sort({ _id: -1 });
        res.status(200).json({ message: 'Calls fetched successfully', total: calls.length, data: calls });
    } catch (error) {
        console.error('Fetch Calls Error:', error);
        res.status(500).json({ error: 'Server error while fetching calls.' });
    }
};

// Get a single call by ID
exports.getCallById = async(req, res) => {
    try {
        const call = await Call.findById(req.params.id);
        if (!call) return res.status(404).json({ message: 'Call not found' });

        res.status(200).json({ data: call });
    } catch (error) {
        console.error('Fetch Call By ID Error:', error);
        res.status(500).json({ error: 'Server error while fetching call by ID.' });
    }
};

// Delete a call by ID
exports.deleteCall = async(req, res) => {
    try {
        const deleted = await Call.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Call not found' });

        res.status(200).json({ message: 'Call deleted successfully.' });
    } catch (error) {
        console.error('Delete Call Error:', error);
        res.status(500).json({ error: 'Server error while deleting call.' });
    }
};