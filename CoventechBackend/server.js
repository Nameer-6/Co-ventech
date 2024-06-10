require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5001; // Changed the port to 5001 for demonstration

// Connect to MongoDB without deprecated options
mongoose.connect(process.env.DB_URI)
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.error("MongoDB connection error: ", err));

const ContactForm = mongoose.model('ContactForm', {
    Name: String,
    Email: String,
    Subject: String,
    Message: String,
});

// Restrict CORS for development, replace '*' with your production domain
app.use(cors({ origin: '*' }));
app.options('*', cors());
app.use(bodyParser.json({ limit: '100kb' })); // Limit set for body-parser

// Async handler wrapper for error handling in async functions
const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next))
        .catch((error) => {
            console.error('Async operation error:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        });
};

app.get('/', asyncHandler(async (req, res) => {
    const formSubmissions = await ContactForm.find();
    res.status(200).json({ success: true, data: formSubmissions });
}));

app.post('/', asyncHandler(async (req, res) => {
    const { Name, Email, Subject, Message } = req.body;
    const contactEntry = new ContactForm({ Name, Email, Subject, Message });
    await contactEntry.save();

    console.log('Received form submission:', req.body);

    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.MAIL_USER, // Sender address
        to: 'sales@co-ventech.com', // List of receivers
        subject: `Contact Form - ${Subject}`, // Subject line
        text: `Name: ${Name}\nEmail: ${Email}\nSubject: ${Subject}\nMessage: ${Message}`, // Plain text body
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(200).json({ success: true, message: 'Form data saved and email sent successfully' });
    } catch (error) {
        console.error('Failed to send email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email' });
    }
}));

// Improved error handling for server listen
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}).on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.log(`Port ${PORT} is already in use. Try another one.`);
    } else {
        console.log('Error starting server:', error);
    }
});
