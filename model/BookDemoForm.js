const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  email: { type: String, required: true },
  course: {
    type: String,
    enum: [
      'english',
      'mathematics',
      'science',
      'coding',
      'robotics',
      'ielts',
      'ela',
      'naplan',
      'staar',
      'icas',
      'acer',
      'selective_test',
      'psat',
      'sat',
      'act',
      'ap',
      'ssat',
      'ib',
      'igcse'
    ],
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);
