import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, setToken } from '../../app/slices/userSlice'
import { login } from '../../api/modules/auth';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const loginUser = () => {
        login({ username, password }).then(({ data: { username, token } }) => {
            if (token) {
                dispatch(setUser(username));
                dispatch(setToken(token));
            }
        }).catch(error => {
            console.log(error.status);
            console.log(error.message)
        })
    }
    return (
        <>
            <span className="page-title">log in</span>
            <div>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button onClick={loginUser}>log in</button>
            </div>
            <Link to="/register">register an account</Link>
        </>
    )
}
