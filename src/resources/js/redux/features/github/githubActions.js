import { fetchLatestCommits, fetchUsedLanguages } from "../../../services/githubService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCommits = createAsyncThunk('github/fetchCommits', async ({owner, repo}) => {
    const response = await fetchLatestCommits(owner, repo);
    return response.data
});
export const fetchLanguages = createAsyncThunk('github/fetchLanguages', async ({owner, repo}) => {
    const response = await fetchUsedLanguages(owner, repo);
    return response.data
});