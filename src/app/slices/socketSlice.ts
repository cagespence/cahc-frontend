import { createSlice } from '@reduxjs/toolkit';

interface SocketState {
    isConnected: boolean;
}

const initialState: SocketState = {
    isConnected: false,
}

export const socketSlice = createSlice({
    name: 'socket',
    initialState,
    reducers: {
        setIsConnected: (state, action) => {
            return { ...state, isConnected: action.payload };
        },
    }
})

export const { setIsConnected } = socketSlice.actions;

export const selectIsConnected = (state: any) => state.room.isConnected;

export default socketSlice.reducer;