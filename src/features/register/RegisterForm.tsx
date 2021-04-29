import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, setToken } from '../../app/slices/userSlice'
import { register } from '../../api/modules/auth';
import { Link } from 'react-router-dom';

export const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const registerUser = () => {
        register({ username, password }).then(({ data: { username, token } }) => {
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
            <span className="page-title">register a new account</span>
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
                <button onClick={registerUser}>register</button>
            </div>
            <Link to="/">login to existing account</Link>

        </>
    )
}
