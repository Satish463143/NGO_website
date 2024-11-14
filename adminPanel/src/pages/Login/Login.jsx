import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import { adminLogin } from '../../../api/LoginApi';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password)

        try {
            const login = adminLogin(formData);
            if (!await login) {
                toast.error("Invalid email or password");
                return;
            }
            toast.success("Login successful");

            setTimeout(() => navigate('/dashboard'), 2000);
        } catch (error) {
            toast.error('Invalid email or password');
            return;
        }
    };

    return (
        <div className='loginbox'>
            <ToastContainer />
            <div style={{ textAlign: 'center' }}>
                <span>
                    <svg className="feather feather-unlock" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <rect height="11" rx="2" ry="2" width="18" x="3" y="11" />
                        <path d="M7 11V7a5 5 0 0 1 9.9-1" />
                    </svg>
                </span>
                <form onSubmit={handleSubmit}>
                    <p>Login</p>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <input
                        type="email"
                        name='email'
                        placeholder='Email*'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    /><br />
                    <input
                        type="password"
                        name='password'
                        placeholder='Password*'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    /><br />
                    <input type="submit" value="Submit" name='submit' />
                </form>
            </div>
        </div>
    );
}

export default Login;
