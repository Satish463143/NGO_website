import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './InqueryItem.css';

const InqueryItem = () => {
    const [inquiries, setInquiries] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInquiries = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/inquiry/all');
                setInquiries(response.data);
            } catch (error) {
                setError('Failed to fetch inquiries');
            }
        };

        fetchInquiries();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this Inquery?")) {
        try {
            await axios.delete(`http://localhost:4000/api/inquiry/${id}`);
            setInquiries(inquiries.filter(inquiry => inquiry._id !== id));
        } catch (error) {
            setError('Failed to delete inquiry');
        }
    
    }
};

    return (
        <div>
            <div className='Users_list'>
                <div>
                    <div className='back_link'>
                        <h4> &gt;&gt; </h4>
                        <Link to='/dashboard'><h4>Dashboard </h4></Link>
                        <h4>/</h4><h4> Inquery</h4>
                    </div>
                    <hr style={{ marginTop: '20px' }} />
                    <div className='Dashboard_title'>
                        <div className='inquery_btn'>
                            <Link to="/inquery"><h2 style={{ background: 'var(--gray)' }}>Inquery List</h2></Link>
                            <Link to="/contact"><h2>Contact List</h2></Link>
                        </div>
                    </div>
                </div>
                <div className='user_table'>
                    <table border="2">
                        <thead>
                            <tr>
                                <th style={{ width: '20px' }}>S.N</th>
                                <th>Full Name</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Inquery For</th>
                                <th>Message</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inquiries.length > 0 ? (
                                inquiries.map((inquiry, index) => (
                                    <tr key={inquiry._id}>
                                        <td className='table_sn'>{index + 1}</td>
                                        <td>{inquiry.name || 'N/A'}</td>
                                        <td>{inquiry.number || 'N/A'}</td>
                                        <td>{inquiry.email || 'N/A'}</td>
                                        <td>{inquiry.inqueryFor || 'N/A'}</td>
                                        <td>{inquiry.message || 'N/A'}</td>
                                        <td style={{ textAlign: 'center' }}>
                                            <a href={`mailto:${inquiry.email}`} target='_blank'><button className='edit_btn'>Response</button></a>
                                            <button className='delete_btn' onClick={() => handleDelete(inquiry._id)}>Close</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7">{error ? error : 'No inquiries found'}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default InqueryItem;
