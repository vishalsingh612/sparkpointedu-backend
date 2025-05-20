const User = require('../model/BookDemoForm');

// Create a new user
exports.createUser = async(req, res) => {
    try {
        const { name, phone, city, email, course } = req.body;

        // Basic validation
        if (!name || !phone || !city || !email || !course) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const newUser = new User({ name, phone, city, email, course });
        const savedUser = await newUser.save();

        res.status(201).json({ message: 'User created successfully', data: savedUser });
    } catch (error) {
        console.error('Create User Error:', error);
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};

// Get all users
exports.getUsers = async(req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 }); // optional: latest first
        res.status(200).json({ data: users });
    } catch (error) {
        console.error('Get Users Error:', error);
        res.status(500).json({ message: 'Error retrieving users', error: error.message });
    }
};

// Get a single user by ID
exports.getUserById = async(req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ data: user });
    } catch (error) {
        console.error('Get User By ID Error:', error);
        res.status(500).json({ message: 'Error retrieving user', error: error.message });
    }
};

// Delete a user by ID
exports.deleteUser = async(req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Delete User Error:', error);
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
};