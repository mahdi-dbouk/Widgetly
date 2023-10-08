import { createSlice } from "@reduxjs/toolkit";
import { fetchCommits, fetchLanguages } from "./githubActions";


const initialState = {
    isLoading: true,
    commits: [],
    languages: [],
    error: ''
}


export const githubSlice = createSlice({
    name: "github",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCommits.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchCommits.fulfilled, (state, action) => {
            state.isLoading = false
            state.commits = action.payload
            state.error = ''
        })
        builder.addCase(fetchCommits.rejected, (state, action) => {
            state.isLoading = false,
            state.commits = [],
            state.error = action.error.message
        })
        builder.addCase(fetchLanguages.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchLanguages.fulfilled, (state, action) => {
            state.isLoading = false
            state.languages = action.payload
            state.error = ''
        })
        builder.addCase(fetchLanguages.rejected, (state, action) => {
            state.isLoading = false,
            state.languages = [],
            state.error = action.error.message
        })
    }

});

export default githubSlice.reducer;