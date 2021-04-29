import React, { useState } from 'react';
import { register } from '../../api/modules/auth';

export const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const registerUser = () => {
        register({ username, password }).then((response) => {
            if (response.data.token) {
                // save token
            }
            console.log(response);
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
        </>
    )
}
