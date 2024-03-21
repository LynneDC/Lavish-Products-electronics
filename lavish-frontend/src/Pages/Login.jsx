import React, { useState } from 'react';

export const Login = (props) => {
    const [_email, setEmail] = useState(''); // eslint-disable-line no-unused-vars
    const [_pass, setPass] = useState(''); // eslint-disable-line no-unused-vars

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(_email);
    }

    return (
        <div className='auth-form-container'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={_email} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={_pass} type="password" placeholder="password" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}

export default Login;

