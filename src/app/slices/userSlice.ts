import { createAsyncThunk, createSlice, Slice } from '@reduxjs/toolkit';

const TOKEN_KEY = 'token'

export interface UserState {
    username: string;
    token: string;
}

const initialState: UserState = {
    username: '',
    token: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            return { ...state, username: action.payload };
        },
        removeUser: (state, action) => {
            return { ...state, username: "" }
        },
        setToken: (state, action) => {
            localStorage.setItem(TOKEN_KEY, action.payload);
            return { ...state, token: action.payload };
        },
        removeToken: (state, action) => {
            localStorage.removeItem(TOKEN_KEY);
            return { ...state, token: '' };
        }
    }
})

export const { setUser, removeUser, setToken, removeToken } = userSlice.actions;

export const selectUser = (state: any) => state.user.username;

export default userSlice.reducer;