import { createSlice } from '@reduxjs/toolkit';

export const projectSlice = createSlice({
    name: 'project',
    initialState: {
        projects: [],
        projectActive: {},
        isSavingProject: false
    },
    reducers: {
        savingProject: (state) => {
            state.isSavingProject = true
        },
        setprojects: (state, { payload }) => {
            state.projects = payload;
            state.isSavingProject = false
        }
    }
});


// Action creators are generated for each case reducer function
export const { savingProject, setprojects } = projectSlice.actions;