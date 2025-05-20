const express = require('express');
const router = express.Router();
const { createUser, getUsers, getUserById, deleteUser } = require('../controller/BookDemoForm');
const { submitContactForm, getAllContacts, getContactById, deleteContactById } = require('../controller/ContactForm');
const { createCall, getAllCalls, getCallById, deleteCall } = require('../controller/BookCall')
    // Public routes
router.post('/bookdemo', createUser);
router.get('/getAllDemo', getUsers);
router.get('/getDemoById/:id', getUserById);
router.delete('/delete/:id', deleteUser);



router.post('/contact', submitContactForm);
router.get('/getAllContacts', getAllContacts);
router.get('/getcontactById/:id', getContactById);
router.delete('/delete/:id', deleteContactById);



router.post('/book-call', createCall);
router.get('/getAllCalls', getAllCalls);
router.get('/getcallById/:id', getCallById);
router.delete('/deletecall/:id', deleteCall);


module.exports = router;