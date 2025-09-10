import { useState } from 'react';
import useModal from '../Modal/useModal';
import './ContactForm.css';
import MainButton from '../MainButton';

    function ContactForm() {
    const { openModal } = useModal();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const { firstName, lastName, email } = formData;
        if (!firstName || !lastName || !email) {
        openModal('Будь ласка, заповни всі обовʼязкові поля.');
        return;
        }
        try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        if (res.ok) {
            openModal('Повідомлення успішно надіслано!');
            setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
        } else {
            openModal('Щось пішло не так. Спробуй ще раз.');
        }
        } catch {
        openModal('Не вдалося надіслати повідомлення. Перевір інтернет і спробуй пізніше.');
        }
    };

    return (
        <div className="form-container">
        <form onSubmit={handleSubmit} className="contact-form">
            <input
            name="firstName"
            placeholder="First Name*"
            value={formData.firstName}
            onChange={handleChange}
            className="form-input"
            required
            />
            <input
            name="lastName"
            placeholder="Last Name*"
            value={formData.lastName}
            onChange={handleChange}
            className="form-input"
            required
            />
            <input
            name="email"
            type="email"
            placeholder="Email Address*"
            value={formData.email}
            onChange={handleChange}
            className="form-input wide"
            required
            />
            <input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input wide"
            />
            <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea wide"
            />
        </form>
            <MainButton text="Submit Now" color="pink" type="submit" className="form-submit-button" onClick={handleSubmit} />
        </div>
    );
}

export default ContactForm;

