import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const { data } = await axios.post('http://localhost:4000/api/profile/login', { email, password }, config);

            localStorage.setItem('userInfo', JSON.stringify(data));

            navigate('/dashboard');
        } catch (error) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className='loginbox'>
            <div style={{ textAlign: 'center' }}>
                <span>
                    <svg className="feather feather-unlock" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <rect height="11" rx="2" ry="2" width="18" x="3" y="11"/>
                        <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
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
                    <input type="submit" value="Submit" name='submit'/>
                </form>
            </div>
        </div>
    );
}

export default Login;
