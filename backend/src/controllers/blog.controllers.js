export const blogCTRL = {};

import Blog from '../models/Blog.js';
import { validateBlog } from '../schemas/blog.schema.js';


blogCTRL.getAll = async (req, res) => {

    try {
        const blogs = await Blog.find();
        res.status(200).json({
            ok: true,
            blogs
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador, error al consultar los blogs'
        })
    }
};

blogCTRL.postOne = async (req, res) => {
    const result = await validateBlog(req.body)

    if (!result.success) return res.status(500).json({
        ok: false,
        msg: JSON.parse(result.error)
    })

    try {
        const blog = new Blog(result.data);

        await blog.save();

        res.status(201).json({
            ok: true,
            blog
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador, fallo al postear un blog'
        })
    }
};