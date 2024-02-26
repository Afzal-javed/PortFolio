import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./Slices/projectSlice";
import userSlice from "./Slices/userSlice";

export const store = configureStore({
    reducer: {
        projects: projectSlice,
        user: userSlice
    }
})