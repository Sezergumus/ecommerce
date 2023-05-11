import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: {type: String, required: true, unique: true},
    password: { type: String, required: true, min: 6, max: 16 },
    isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true }
); 

export default mongoose.model('User', userSchema);