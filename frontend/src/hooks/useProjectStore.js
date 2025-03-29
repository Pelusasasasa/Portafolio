import { useDispatch, useSelector } from "react-redux";
import { savingProject, setprojects } from "../reducer/project/projectSlice";
import portfolioApi from "../api/portfolioApi";

export const useProjectStore = () => {
    const dispatch = useDispatch();
    const { projects, projectActive, isSavingProject } = useSelector(state => state.project)

    const startSaving = async () => {
        dispatch(savingProject());
    };

    const startGetProjects = async () => {
        const { data } = await portfolioApi.get('project');

        if (data.ok) {
            dispatch(setprojects(data.projects));
        };
    };

    return {
        //Atributos
        isSavingProject,
        projectActive,
        projects,

        //Metodos
        startSaving,
        startGetProjects
    }

};