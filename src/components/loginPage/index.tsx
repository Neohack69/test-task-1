import React from 'react';
import './styles.css';

const LoginForm = () => {
    return (
        <>
            <div className="formWrapper">
                <h1>Login Form</h1>
                <input type="text" placeholder="admin"/>
                <input type="text" placeholder="123456"/>
                <button>Login</button>
            </div>
        </>
    )
}

export default LoginForm;
