import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    token: ""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.id = action.payload._id,
                state.firstName = action.payload.firstName,
                state.lastName = action.payload.lastName,
                state.email = action.payload.email,
                state.token = action.payload.token
        },
        logOutUser: (state, action) => {
            state.id = "",
                state.firstName = "",
                state.lastName = "",
                state.email = "",
                state.token = ""
        }
    }
})

export const { loginUser, logOutUser } = userSlice.actions
export default userSlice.reducer