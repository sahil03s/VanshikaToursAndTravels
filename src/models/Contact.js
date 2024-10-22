import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true, 'Please enter your name'],
    },
    phone: {
        type: String,
        required : [true, 'Please enter your phone number'],
    },
    email: {
        type: String,
    },
    traveldate: {
        type: Date,
        default: null,
    },
    duration: {
        type: Number,
        default: null,
    },
    passengers: {
        type: Number,
        default: null,
    },
    comment: {
        type: String,
        default: '',
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
