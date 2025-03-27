import { Schema } from "mongoose";

const Blog = new Schema({
    title: {
        type: String,
        required: [true, "El titulo es Obligatorio"],
        trim: true,
    },
    content: {
        type: String,
        required: [true, 'el contenido es Obligatorio']
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true
    },
    tags: {
        type: [String],
        default: []
    },
    featureImage: {
        type: String
    },
    relatedProject: {
        type: Schema.Types.ObjectId,
        ref: 'Projet'
    }
}, {
    timestamps: true
})