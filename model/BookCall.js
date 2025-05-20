const mongoose = require('mongoose');

const bookcall = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
});

module.exports = mongoose.model('Call', bookcall);