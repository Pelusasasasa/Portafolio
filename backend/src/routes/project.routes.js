import { Router } from 'express';
const router = Router();

import projectCTRL from '../controllers/project.contorllers.js';
const { getAll, postOne } = projectCTRL;

router.route('/')
    .post(postOne)
    .get(getAll)


export default router;
