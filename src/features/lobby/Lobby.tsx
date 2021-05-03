import React from 'react'
import { connect, useSelector } from 'react-redux';
import { selectInRoom, selectMembers } from '../../app/slices/roomSlice';
import './lobby.scss';

export const Lobby = () => {
    const inRoom: string = useSelector(selectInRoom);
    const members: string[] = useSelector(selectMembers);
    const Memberlist = () => {
        return (
            <>
                <div className="lobby--room-players">
                    players
                </div>
                {members.map(member => <div key={member}>{`${member}`}</div>)}
            </>
        )
    }

    return (
        <div>
            <div>
                in a game
            </div>
            room code: <span className="lobby--room-code">{`${inRoom}`}</span>
            <Memberlist />
        </div>
    )
}