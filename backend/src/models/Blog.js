import { model, Schema } from "mongoose";

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
});

Blog.pre('save', function (next) {
    if (!this.slug) {
        this.slug = this.title
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');
    }
    next();
})

export default model('Blog', Blog);