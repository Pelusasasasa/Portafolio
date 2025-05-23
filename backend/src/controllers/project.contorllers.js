const projectCTRL = {};

import { validateProject } from '../schemas/project.schema.js';
import Project from '../models/Project.js';

projectCTRL.getAll = async (req, res) => {

    try {
        const projects = await Project.find();
        res.status(200).json({
            ok: true,
            projects
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador, error al consultar por los projectos'
        })
    }

};

projectCTRL.postOne = async (req, res) => {
    try {

        const result = await validateProject(req.body);

        console.log(result);

        if (!result.succes) return res.status(500).json({
            ok: false,
            msg: JSON.parse(result.error)
        })

        const project = new Project(result.data);

        await project.save();

        res.status(201).json({
            ok: true,
            project
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: `Hable con el administrador, error al postear un projecto`
        })
    }
};

export default projectCTRL;