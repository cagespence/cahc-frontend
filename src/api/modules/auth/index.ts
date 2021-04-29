import axios, { AxiosResponse } from 'axios';

interface UserDetails {
    username: string;
    password: string;
}

export interface UserToken {
    id: number;
    username: string;
    token: string;
}

const authAPI = axios.create({
    baseURL: process.env.REACT_APP_AUTH_URL,
    timeout: 1000
});

export const register = async ({ username, password }: UserDetails): Promise<AxiosResponse<UserToken>> => {
    const response = await authAPI.post(process.env.REACT_APP_AUTH_REGISTER!, { username, password }).catch(error => {
        return error.message;
    });
    return response;
}

export const login = async ({ username, password }: UserDetails): Promise<AxiosResponse<UserToken>> => {
    const response = await authAPI.post(process.env.REACT_APP_AUTH_LOGIN!, { username, password }).catch(error => {
        return error.message;
    });
    return response;
}