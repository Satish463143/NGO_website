import React, { useState } from 'react';
import './ContactUs.css';
import { addNewInquiry } from '../../api/ContactUsApi';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleForm = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            console.log(formData);
            const response = await addNewInquiry(formData);
            console.log(response);
            setSuccess("Your message has been sent successfully!");
            setFormData({ name: '', email: '', number: '', message: '' });
        } catch (err) {
            setError("Failed to send the message. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='container'>
            <div className="contact_grid">
                <div>
                    <h1>Contact Us</h1>
                </div>
                <div>
                    <p>
                        "At <span> Hiraya Samaj</span> , we are committed to making a difference, and we’d love to hear from you! Whether you’re interested in supporting our mission, have a question, or want to learn more about our programs, we’re here to help. Reach out to us via the form below or contact us directly through <a href='mailto:hirayasamaj@gmail.com'>hirayasamaj@gmail.com</a>. Together, we can create lasting change!"
                    </p>
                </div>
            </div>

            <div className='contact_form'>
                <div>
                    <form onSubmit={handleForm}>
                        <h2>Send Us a Message</h2>

                        <input
                            type="text"
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Name...'
                            required
                        /><br />

                        <input
                            type="email"
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Email...'
                            required
                        /><br />

                        <input
                            type="number"
                            name='number'
                            value={formData.number}
                            onChange={handleChange}
                            placeholder='Contact...'
                        /><br />

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            id="message"
                            placeholder='Your Concern...'
                        /><br />

                        <input
                            type="submit"
                            className='submit_btn'
                            value={loading ? "Sending..." : "Submit"}
                            disabled={loading} // Disable button while loading
                        />
                    </form>

                    {error && <p className="error">{error}</p>} {/* Error message */}
                    {success && <p className="success">{success}</p>} {/* Success message */}
                </div>

                <div className="map">
                    <h3>Visit Us</h3>
                    <p>MahadevSthan, Koteshwor <br />  Kathmandu, Nepal</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7543.794965143294!2d85.34569236162832!3d27.675973036819745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snp!4v1726151232390!5m2!1sen!2snp"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <h3 className='email_margin'>Email Us</h3>
                    <a href="mailto:hirayasamaj@gmail.com">hirayasamaj@gmail.com</a>
                    <h3 className='email_margin'>Give Us a Call</h3>
                    <a href="tel:9801151414">9801151414</a>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
