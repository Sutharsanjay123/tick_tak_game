const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mediaDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define a schema
const mediaSchema = new mongoose.Schema({
    name: String,
    email: String,
    image: {
        data: Buffer,
        contentType: String,
    },
    video: {
        data: Buffer,
        contentType: String,
    },
});

const Media = mongoose.model('Media', mediaSchema);

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

// Routes
app.post('/upload', upload.fields([{ name: 'image' }, { name: 'video' }]), async (req, res) => {
    try {
        const { name, email } = req.body;
        const imageFile = req.files['image'] ? req.files['image'][0] : null;
        const videoFile = req.files['video'] ? req.files['video'][0] : null;

        const media = new Media({
            name,
            email,
            image: imageFile
                ? {
                      data: fs.readFileSync(imageFile.path),
                      contentType: imageFile.mimetype,
                  }
                : null,
            video: videoFile
                ? {
                      data: fs.readFileSync(videoFile.path),
                      contentType: videoFile.mimetype,
                  }
                : null,
        });

        await media.save();

        // Cleanup uploaded files
        if (imageFile) fs.unlinkSync(imageFile.path);
        if (videoFile) fs.unlinkSync(videoFile.path);

        res.status(200).send('File uploaded and data saved successfully!');
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
