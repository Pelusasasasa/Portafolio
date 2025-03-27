import { Schema, model } from 'mongoose';

const Project = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre del proyecto es obligatorio'],
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    technologies: {
        type: [String],
        required: true
    },
    imageURL: {
        type: String,
        default: ''
    },
    githubURL: {
        type: String,
        default: ''
    },
}, {
    timestamps: true
});


module.exports = model('Project', Project);