import mongoose from 'mongoose';

const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
        
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    stock: {
        type: String,
        requied: true
    },
    category: {
        type: String,
        requied: true,
    }

    

})