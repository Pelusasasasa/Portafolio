import { configureStore } from "@reduxjs/toolkit";
import { projectSlice } from "./project/projectSlice";
import { blogSlice } from "./blog/blogSlice";

export const store = configureStore({
    reducer: {
        project: projectSlice.reducer,
        blog: blogSlice.reducer
    }
})