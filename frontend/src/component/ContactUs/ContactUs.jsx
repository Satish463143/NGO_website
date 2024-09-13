import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
    const handleForm=()=>{

    }
  return (
    <div className='container'>
        <div className="contact_grid">
            <div>
                <h1>Contact Us</h1>
            </div>
            <div>
                <p>
                    "At <span> Hiraya Samaj</span> , we are committed to making a difference, and we’d love to hear from you! Whether you’re interested in supporting our mission, have a question, or want to learn more about our programs, we’re here to help. Reach out to us via the form below or contact us directly through <a href=''> hirayasamaj@gmail.com.</a> Together, we can create lasting change!"
                </p>
            </div>
        </div>
        <div className='contact_form'>
            <div>
                <form action="" method='post' onSubmit={handleForm}>
                    <h2>Send US a Messagae</h2>
                    <input type="text" name='name' placeholder='Name...' required /><br />
                    <input type="email" name='email' placeholder='Email...' required /><br />
                    <input type="number" name='number' placeholder='Contact...'  /><br />
                    <textarea name="messaage" id="message" placeholder='Your Concern...' ></textarea><br />
                    <input type="submit" className='submit_btn' value="Submit" name='submit'  />
                </form>
            </div>
            <div className="map">
                <h3>Visit Us</h3>
                <p>MahadevSthan, Koteshwor <br />  Kathmandu, Nepal</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7543.794965143294!2d85.34569236162832!3d27.675973036819745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snp!4v1726151232390!5m2!1sen!2snp"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <h3 className='email_margin'>Email Us</h3>
                <a href="mailto:hirayasamaj@gmail.com">hirayasamaj@gmail.com</a>
                <h3 className='email_margin'>Give Us a Call</h3>
                <a href="">9801151414</a>
            </div>
        </div>
    </div>
  )
}

export default ContactUs