import mongoose from 'mongoose';
import mongooseSequence from 'mongoose-sequence';

const AutoIncrement = mongooseSequence(mongoose);

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: Number
}, { timestamps: true });  // Add timestamps here

userSchema.plugin(AutoIncrement, { inc_field: 'userId' });

const postUser = mongoose.model('User', userSchema);

export default postUser;
