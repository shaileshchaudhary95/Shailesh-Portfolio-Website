function Contactform() {
    return (
        <div className="contact-form">
            <h2 className="contact-title">Contact Me</h2>
            <form action="/" className='contact-ditail'>
                <label htmlFor="name" className="contact-label">Name</label>
                <input type="text" id="name" placeholder="Enter Your Name" className="contact-input" required />
                <label htmlFor="email" className="contact-label">Email</label>
                <input type="email" id="email" placeholder="Enter Your Email" className="contact-input" required />
                <label htmlFor="message" className="contact-label">Message</label>
                <textarea id="message" placeholder="Enter Your Message" className="contact-textarea" required></textarea>
                <button type="submit" className="contact-btn">Send Message</button>
            </form>
        </div>
    )
}

export default Contactform