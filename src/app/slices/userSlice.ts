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
            state.username = action.payload;
        },
        removeUser: (state, action) => {
            state.username = '';
        },
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem(TOKEN_KEY, action.payload);
        },
        removeToken: (state, action) => {
            state.token = '';
            localStorage.removeItem(TOKEN_KEY);
        }
    }
})

export const { setUser, removeUser, setToken, removeToken } = userSlice.actions;

export const selectUser = (state: any) => state.user.username;

export default userSlice.reducer;