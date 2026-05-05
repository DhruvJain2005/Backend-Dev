import mongoose from 'mongoose';

const userschema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    products: {
        type: String,
        required: true,
        
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    totalamount: {
        type: String,
        requied: true
    },
    status: {
        type: String,
        requied: true,
    },
    createdAt: {
        type: String,
        requied: true
    }

    

})