const mongoose = require('mongoose');
const SALT_WORK_FACTOR = 10;

const UserSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        index: {
            unique: true,
        },
    },
    fullName: String,
  
}, {
    timestamps: true,
    collection: 'users',
});

UserSchema.plugin(require('mongoose-bcrypt'));

module.exports = mongoose.model('User', UserSchema);