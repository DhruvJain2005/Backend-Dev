import mongoose from 'mongoose';

const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String
    },
    createdAt: {
        type: String,
        requied: true,
    }

    

})