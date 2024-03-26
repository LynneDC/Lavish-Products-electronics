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
app.post('/upload', upload.single('product'), (req, res) => {
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
    let products = await Product.find({});
    let id;
    if (products.length>0)
    {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else {
        id=1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: true,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
        available: true,
        
    });
    console.log(product);
    await product.save();
    console.log('Saved');
    res.json({
        success: true,
        name:req.body.name,
    });
})
// creating api for deleting product
app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({id: req.body.id});
    console.log('Deleted');
    res.json({
        success: true,
        name: req.body.name,
    });
})
// creating api for getting all product
app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    console.log('All products fetched');
    res.send(products);
})

//schema for creating user model

const Users = mongoose.model('Users', {
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    },

});

// creatind endpoint for registering user

app.post('/signup', async (req, res) => {
    let check = await Users.findOne({email: req.body.email});
    if (check) {
        return res.status(400).json({success: false, errors: 'Email already exists'});   
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new Users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    });
    await user.save();

    const data = {
        user: {
            id: user.id,
        },
    }

    const token = jwt.sign(data, 'secret_ecom');
    res.json({success: true,token});
});

// creatign endpoint for login user
app.post('/login', async (req, res) => {
    let user = await Users.findOne({email: req.body.email});
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id,
                },
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({success: true, token});
        }
        else{
            res.json({success: false, errors: 'Password is incorrect'});
        }
    }
    else {
        res.json({success: false, errors: 'Email not found'});
    }
});


//creating endpoint for newcollection data
app.get('/newcollections', async (req, res) => {
    let products = await Product.find({category: 'newcollection'});
    let newcollection = products.slice(1).slice(-8);
    console.log('New collection fetched');
    res.send(newcollection);
})

app.listen(port, (error) => {
    if (!error) {
        console.log('Server is running on port' +port);
    }
    else {
        console.log('Error found'+ error)
    }
});