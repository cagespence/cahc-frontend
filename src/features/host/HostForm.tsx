import React from 'react'
import { selectUser } from '../../app/slices/userSlice'
import { useSelector } from 'react-redux';
import { createRoom } from '../../socketio/socket';
import { selectInRoom, selectIsHost } from '../../app/slices/roomSlice';
export const HostForm = () => {
    const username = useSelector(selectUser);
    const inRoom = useSelector(selectInRoom);
    const isHost = useSelector(selectIsHost);
    const handleCreateRoom = () => {
        createRoom(username);
    }
    return (
        <>
            <div>
                Host a room
            </div>
            <div>
                {`${inRoom}`} - {`${isHost}`}
            </div>
            <button onClick={handleCreateRoom}>host</button>
        </>
    )
}
