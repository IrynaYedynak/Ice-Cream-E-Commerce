import './ContactUsMain.css'
import ContactForm from './ContactForm'
import IconWeb from "../../assets/images/contact-icon1.svg"
import IconPhone from "../../assets/images/contact-icon2.svg"
import IconEmail from "../../assets/images/contact-icon3.svg"


function ContactUsMain() {
    return (
            <section className="contact-us">
    <div className="contact-us-title">
        <h2>Get in <span>Touch</span> With Us</h2>
        <p>Reach out and connect with us today for any inquiries or assistance!</p>
    </div>

    <div className="contact-us-container">
        <div className="contact-info">
        {[
            {
            image: IconWeb,
            title: "Our Location",
            content: <>121 King Street, Melbourne <br />Victoria 3000 Australia</>
            },
            {
            image: IconPhone,
            title: "Phone Number",
            content: <>+61 3 8376 6284 <br />+800 2345 6789</>
            },
            {
            image: IconEmail,
            title: "Email us at",
            content: <>info@icedelights.com <br />icedelights@gmail.com</>
            }
        ].map((item, idx) => (
            <div className="contact-card" key={idx}>
            <div className="contact-icon-wrapper">
            <img className="contact-icon" src={item.image} alt={item.title} />
            </div>
            <div className="contact-card-info">
                <h4>{item.title}</h4>
                <p>{item.content}</p>
            </div>
            </div>
        ))}
        </div>
        
        <ContactForm />
    </div>
</section>
    )
}

export default ContactUsMain