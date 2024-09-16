import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './InqueryItem.css';
import { deleteInquiry, getAllInquiries } from "../../../api/ContactUsApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InqueryItem = () => {
    const [inquiries, setInquiries] = useState([]);

    const { data: inquiryList, error, loading } = getAllInquiries();
    useEffect(() => {
        setInquiries(inquiryList);
    }, [inquiryList])

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this Inquery?")) {
            try {
                deleteInquiry(id);
                toast.success("Inquiry deleted.");
                setInquiries(inquiries.filter(inquiry => inquiry._id !== id));
            } catch (error) {
                toast.error('Failed to delete inquiry');
            }

        }
    };

    return (
        <div>
            <ToastContainer />
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
                            <Link to="/inquery"><h1>Inquery List</h1></Link>
                        </div>
                    </div>
                </div>
                <div className='user_table'>
                    <table border="2">
                        <thead>
                            <tr>
                                <th style={{ width: '20px' }}>S.N</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Number</th>
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
                                        <td>{inquiry.email || 'N/A'}</td>
                                        <td>{inquiry.number || 'N/A'}</td>
                                        <td>{inquiry.message || 'N/A'}</td>
                                        <td style={{ textAlign: 'center' }}>
                                            {inquiry.email && <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${inquiry.email}`} target='_blank' rel='noopener noreferrer'>
                                                <button className='edit_btn'>Respond</button>
                                            </a>}

                                            <button className='delete_btn' onClick={() => handleDelete(inquiry._id)}>Delete</button>
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
