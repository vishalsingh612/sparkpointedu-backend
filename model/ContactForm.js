const mongoose = require('mongoose');

const contactForm = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },

});

module.exports = mongoose.model('ConactUs', contactForm);;