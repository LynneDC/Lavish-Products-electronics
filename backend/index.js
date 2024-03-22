const port = 4000;
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const exp = require('constants');

app.use(express.json());
app.use(cors());

// Database connection with mongoDB
mongoose.connect ('mongodb+srv://briankips:000123000@cluster0.nw1ozjj.mongodb.net/Lavish')
// API creation
app.get('/', (req, res) => {
    res.send('Hello express is running');
})



// Image storage in multer

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({
        storage: storage
})

//creating upload endpoint for images
app.use('/images', express.static('upload/images'));
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
        success: 1,
        profile_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

// Schema for creating product
const Product = mongoose.model('Product', {
    id:{
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available:{
        type: Boolean,
        required: true,
    },

});

app.post('/addproduct', async (req, res) => {
    const product = new Product({
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
        available: req.body.available,
        
    });
    console.log(product);
    await product.save();
    console.log('Product saved');
    res.json({
        success: true,
        name:req.body.name,
    });
})



app.listen(port, (error) => {
    if (!error) {
        console.log('Server is running on port' +port);
    }
    else {
        console.log('Error found'+ error)
    }
});