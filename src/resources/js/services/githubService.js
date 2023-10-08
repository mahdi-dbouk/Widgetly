import axios from "axios";

//reads github personal access token from environment variables
const PAT = import.meta.env.VITE_GITHUB_PERSONAL_ACCESS_TOKEN;

export const checkIfAccountExists = async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`, {
            headers: {
                'Authorization': `Bearer ${PAT}`
            }
        });
        return response;
    } catch (error) {
        console.log('error:', error)
        throw error
    }
}

export const checkIfOwnerHasRepo = async (username, repo) => {
    try {
        const response = await axios.get(`https://api.github.com/repos/${username}/${repo}`, {
            headers: {
                'Authorization': `Bearer ${PAT}`
            }
        });
        return response;
    } catch (error) {
        console.log('error:', error)
        throw error
    }
}

export const fetchLatestCommits = async (owner, repo) => {

    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits`, {
            headers: {
                'Authorization': `Bearer ${PAT}`
            }
    });

    return response;
}

export const fetchUsedLanguages = async (owner, repo) => {

    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/languages`, {
        headers: {
            'Authorization': `Bearer ${PAT}`
        }
    });

    return response;
}