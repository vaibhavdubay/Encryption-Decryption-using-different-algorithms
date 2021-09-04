const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    email:{
        type: String,
        required: true 
    },
    textin:{
        type: String,
        required: true 
    },
    algoin:{
        type: String,
        required: true 
    },
    keyin:{
        type: String,
        required: true 
    }
});

const Data = module.exports = mongoose.model('data', DataSchema);
