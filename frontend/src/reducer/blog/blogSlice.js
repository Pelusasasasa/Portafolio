import { createSlice } from '@reduxjs/toolkit';

export const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        blogs: [],
        blogActive: {},
        isSavingBlog: false

    },
    reducers: {
        increment: (state, /* action */) => {
            state.counter += 1;
        },
    }
});


// Action creators are generated for each case reducer function
export const { increment } = blogSlice.actions;