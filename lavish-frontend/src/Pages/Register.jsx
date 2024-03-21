// In Register.jsx
import React, { useState } from 'react';

export const Register = (props) => {
    const [email, setEmail] = useState(''); // eslint-disable-line no-unused-vars
    const [pass, setPass] = useState(''); // eslint-disable-line no-unused-vars
    const [name, setName] = useState(''); // eslint-disable-line no-unused-vars

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Full Name</label>
                <input value={name} type="text" placeholder="Full Name" id="name" name="name" />
                <label htmlFor="email">email</label>
                <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} type="password" placeholder="password" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}

export default Register;
