import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ContactItem.css'; // Ensure your CSS file is imported

const ContactItem = () => {
  const [contacts, setContacts] = useState([]); // State to hold contacts
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/contact/all'); // API endpoint to fetch contacts
        setContacts(response.data); // Set contacts in state
      } catch (error) {
        console.error("There was an error fetching the contacts!", error);
        setError('Failed to load contacts');
      }
    };

    fetchContacts();
  }, []); // Fetch contacts on component mount

  return (
    <div>
      <div className='Users_list'>
        <div>
          <div className='back_link'>
            <h4> &gt;&gt; </h4>
            <Link to='/dashboard'><h4>Dashboard </h4></Link>
            <h4>/</h4><h4> Inquiry</h4>
          </div>
          <hr style={{ marginTop: '20px' }} />
          <div className='Dashboard_title'>
            <div className='inquery_btn'>
              <Link to="/inquery"><h2>Inquiry List</h2></Link>
              <Link to="/contact"><h2 style={{ background: 'var(--gray)' }}>Contact List</h2></Link>
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
                <th>Inquiry For</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {error && (
                <tr>
                  <td colSpan="7" style={{ color: 'red', textAlign: 'center' }}>{error}</td>
                </tr>
              )}
              {contacts.length > 0 ? (
                contacts.map((contact, index) => (
                  <tr key={contact.id}>
                    <td className='table_sn'>{index + 1}</td>
                    <td>{contact.name || 'N/A'}</td>
                    <td>{contact.number || 'N/A'}</td>
                    <td>{contact.email || 'N/A'}</td>
                    <td>{contact.inqueryFor || 'N/A'}</td>
                    <td>{contact.message || 'N/A'}</td>
                    <td style={{ textAlign: 'center' }}>
                      <a href={`mailto:${contact.email}?from=satish463143@gmail.com`} target='_blank' rel='noopener noreferrer'>
                        <button className='edit_btn'>Response</button>
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center' }}>No contacts found</td> {/* Updated colspan for correct alignment */}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ContactItem;
