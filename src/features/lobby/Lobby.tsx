import React from 'react'
import { connect, useSelector } from 'react-redux';
import { selectInRoom, selectMembers } from '../../app/slices/roomSlice';

export const Lobby = () => {
    const inRoom: string = useSelector(selectInRoom);
    const members: string[] = useSelector(selectMembers);
    const Memberlist = () => {
        return (
            <>
                {members.map(member => <div key={member}>{{ member }}</div>)}
            </>
        )
    }

    return (
        <div>
            <Memberlist />
        </div>
    )
}