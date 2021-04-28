import React from 'react'

export const RegisterForm = () => {
    return (
        <>
            <span className="page-title">register a new account</span>
            <form action="">
                <input type="text" name="u" id="username" />
                <input type="password" name="password" id="password" autoComplete="new-password" />
                <button type="button">register</button>
            </form>
        </>
    )
}
