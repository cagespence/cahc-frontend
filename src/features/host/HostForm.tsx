import React from 'react'
import { selectUser } from '../../app/slices/userSlice'
import { useSelector } from 'react-redux';
import { createRoom, connect } from '../../socketio/socket';
import { selectInRoom, selectIsHost } from '../../app/slices/roomSlice';
import { selectIsConnected } from '../../app/slices/socketSlice';
export const HostForm = () => {
    const username = useSelector(selectUser);
    const inRoom = useSelector(selectInRoom);
    const isHost = useSelector(selectIsHost);
    const isConnected = useSelector(selectIsConnected);

    const handleCreateRoom = () => {
        if (!isConnected) {
            console.log('not connected yet');
            connect(username, createRoom);
        }
    }

    const FormIfNotJoined = () => {
        if (!inRoom) {
            return (
                <>
                    <div>
                        Host a room
                    </div>
                    <button onClick={handleCreateRoom}>host</button>
                </>
            )
        } else return (
            <>
                <div>{`hosting room: ${inRoom}`}</div>
                <button>close room</button>
            </>
        )
    }

    return (
        <FormIfNotJoined />
    )
}
