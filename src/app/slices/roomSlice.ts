import { createSlice } from '@reduxjs/toolkit';

interface RoomState {
    inRoom: string | undefined;
    isHost: boolean;
}

const initialState: RoomState = {
    inRoom: undefined,
    isHost: false,
}

export const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        setInRoom: (state, action) => {
            return { ...state, inRoom: action.payload };
        },
        setIsHost: (state, action) => {
            return { ...state, isHost: action.payload };
        }
    }
})

export const { setInRoom, setIsHost } = roomSlice.actions;

export const selectInRoom = (state: any) => state.room.inRoom;
export const selectIsHost = (state: any) => state.room.isHost;

export default roomSlice.reducer;