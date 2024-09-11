import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './UserItem.css';

const UserItem = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/User/list');
                if (response.data.success) {
                    setUsers(response.data.users);
                } else {
                    setError('Failed to fetch users');
                }
            } catch (err) {
                console.error("Error fetching users:", err);
                setError('An error occurred while fetching users.');
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className='Users_list'>
            <div>
                <div className='back_link'>
                    <h4> &gt;&gt; </h4> 
                    <Link to='/dashboard'><h4>Dashboard </h4></Link>
                    <h4>/</h4><h4> User</h4>
                </div> 
                <hr style={{marginTop:'20px'}}/>
                <div className='Dashboard_title'>
                    <h1>Users List</h1>
                </div>
            </div>
            <div className='user_table'>
                <table border="2">
                    <thead>
                        <tr>
                            <th style={{width:'20px'}}>S.N</th>
                            <th>Name</th>
                            <th>PhoneNumber</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user, index) => (
                                <tr key={user.id}>
                                    <td className='table_sn'>{index + 1}</td>
                                    <td>{user.name || 'N/A'}</td>
                                    <td>{user.phoneNumber || 'N/A'}</td>
                                    <td>{user.email || 'N/A'}</td>
                                    <td>{user.address || 'N/A'}</td>
                                    <td>{user.dob || 'N/A'}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No users found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
};

export default UserItem;
