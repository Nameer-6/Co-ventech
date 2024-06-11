require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5001;

['DB_URI', 'MAIL_HOST', 'MAIL_PORT', 'MAIL_USER', 'MAIL_PASS'].forEach((key) => {
    if (!process.env[key]) {
        console.error(`Missing required environment variable: ${key}`);
        process.exit(1);
    }
});

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB successfully connected"))
.catch(err => console.error("MongoDB connection error: ", err));

const ContactForm = mongoose.model('ContactForm', {
    Name: String,
    Email: String,
    Subject: String,
    Message: String,
});

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

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

    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: true, // Note: use true for 465, false for other ports
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.MAIL_USER,
        to: 'sales@co-ventech.com',
        subject: `Contact Form - ${Subject}`,
        text: `Name: ${Name}\nEmail: ${Email}\nSubject: ${Subject}\nMessage: ${Message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Form data saved and email sent successfully' });
    } catch (error) {
        console.error('Failed to send email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email' });
    }
}));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}).on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.log(`Port ${PORT} is already in use. Try another one.`);
    } else {
        console.log('Error starting server:', error);
    }
});
