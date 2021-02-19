const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['c++','nodejs']
    },
    files: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'File'
    }],
    start: {
        type: String,
        required: true,
        default: ''
    }
})

module.exports = mongoose.model('Project',projectSchema);