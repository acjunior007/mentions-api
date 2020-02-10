
const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const schema = new Schema({
    friend: {
        type: String,
        required: true,
        trim: true
    },
    mention:{
        type: String,
        required: true
    }
});

module.exports = Mongoose.model('Mentions', schema);