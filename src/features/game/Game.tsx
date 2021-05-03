import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux';
import { selectInRoom, selectIsHost } from '../../app/slices/roomSlice';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory, Link } from 'react-router-dom';
import { HostForm } from '../host/HostForm';
import { JoinForm } from '../join/JoinForm';
import { Lobby } from '../lobby/Lobby';
import { selectUser } from '../../app/slices/userSlice';

export const Game = () => {
    const user: string = useSelector(selectUser)
    const inRoom: string = useSelector(selectInRoom);
    const isHost = useSelector(selectIsHost);
    const history = useHistory()
    useEffect(() => {
        if (inRoom) {
            // history.location.pathname = '/game/play'
            history.push('/game/play');
            console.log('in a room')
        }
        if (!inRoom) {
            console.log('not in a room')
            history.push('/game');
        }
    }, [inRoom]);

    return (
        <>
            {`logged in as ${user}`}
            <Route exact path="/game">
                <div>
                    <Link to="/game/join">join game with code</Link>
                </div>
                <div>
                    <Link to="/game/host">host a new game</Link>
                </div>
            </Route>
            <Route exact path="/game/host">
                <HostForm />
            </Route>
            <Route exact path="/game/join">
                <JoinForm />
            </Route>
            <Route exact path="/game/play">
                <Lobby />
            </Route>
        </>
    )
}
