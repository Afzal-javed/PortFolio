import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    id: "",
    title: "",
    desc: "",
    image: "",
    srcLink: "",
    liveUrl: ""
}]

const projectSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        addProjects: (state, action) => {
            return action.payload.map(item => ({
                id: item._id,
                title: item.title,
                desc: item.desc,
                image: item.image,
                srcLink: item.srcLink,
                liveUrl: item.liveUrl
            }));
        }
    }
})


export const { addProjects } = projectSlice.actions
export default projectSlice.reducer;