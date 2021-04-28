import axios from 'axios';

interface UserDetails {
    username: string;
    password: string;
}

const authAPI = axios.create({
    baseURL: process.env.AUTH_URL,
    timeout: 1000
});

export const register = async ({ username, password }: UserDetails) => {
    return authAPI.post(process.env.AUTH_REGISTER!, { username, password });
}