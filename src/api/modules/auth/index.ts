import axios from 'axios';

interface UserDetails {
    username: string;
    password: string;
}

const authAPI = axios.create({
    baseURL: process.env.REACT_APP_AUTH_URL,
    timeout: 1000
});

export const register = async ({ username, password }: UserDetails) => {
    console.log(process.env.REACT_APP_AUTH_REGISTER);
    const response = await authAPI.post(process.env.REACT_APP_AUTH_REGISTER!, { username, password }).catch(error => {
        return error.message;
    });
    return response;
}