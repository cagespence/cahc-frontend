import { createSlice } from '@reduxjs/toolkit';

interface RoomState {
    inRoom: string | undefined;
    isHost: boolean;
    members: string[];
}

const initialState: RoomState = {
    inRoom: undefined,
    isHost: false,
    members: [],
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
        },
        setMembers: (state, action) => {
            return { ...state, members: action.payload };
        },
    }
})

export const { setInRoom, setIsHost, setMembers } = roomSlice.actions;

export const selectInRoom = (state: any) => state.room.inRoom;
export const selectIsHost = (state: any) => state.room.isHost;
export const selectMembers = (state: any) => state.room.members;

export default roomSlice.reducer;