import { Router } from 'express';
export const blogRouter = Router();

import { blogCTRL } from '../controllers/blog.controllers.js';

const { getAll, postOne } = blogCTRL;


blogRouter.route('/')
    .get(getAll)
    .post(postOne)
