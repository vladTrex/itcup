import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import emailValidator from 'email-validator';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        index: {unique: true},
        validate: {
            validator: emailValidator.validate,
            message: props => `${props.value} is not a valid email address.`
        }
    },
    hashPassword: {
        type: String,
        required: true,
        minlength: 6
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

UserSchema.methods.comparePassword = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
};
