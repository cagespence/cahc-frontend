import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../app/slices/userSlice';
import roomReducer from '../app/slices/roomSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        room: roomReducer,
    },
});