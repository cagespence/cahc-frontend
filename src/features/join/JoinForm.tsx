import React, { useState } from 'react'
import { selectUser } from '../../app/slices/userSlice'
import { useSelector } from 'react-redux';
import { joinRoom, connect } from '../../socketio/socket';
import { selectInRoom, selectIsHost } from '../../app/slices/roomSlice';
import { selectIsConnected } from '../../app/slices/socketSlice';

export const JoinForm = () => {
    const username = useSelector(selectUser);
    const inRoom = useSelector(selectInRoom);
    const isHost = useSelector(selectIsHost);
    const isConnected = useSelector(selectIsConnected);

    const [roomCode, setRoomCode] = useState('');

    const handleSetRoomCode = (event: any) => {
        setRoomCode(event.target.value);
    }

    const handleJoinRoom = () => {
        if (!isConnected) {
            console.log('not connected yet');
            connect(username, joinRoom, roomCode);
        }
        if (isConnected) {
            joinRoom(roomCode)
        }
    }

    const FormIfNotJoined = () => {
        if (!inRoom) {
            return (
                <>
                    <div>
                        Join a room
                    </div>
                    <input
                        value={roomCode}
                        onChange={handleSetRoomCode}
                        type="text"
                        name="roomCode"
                        id="roomCode"
                    />
                    <button onClick={handleJoinRoom}>join</button>
                </>
            )
        } else {
            return (
                <>
                    <div>In room: {`${inRoom}`}</div>
                    <button>leave room</button>
                </>
            )
        }
    }

    return (
        <FormIfNotJoined />
    )
}