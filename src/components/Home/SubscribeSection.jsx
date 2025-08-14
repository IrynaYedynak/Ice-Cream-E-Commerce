import { useState } from 'react';
import TriangleShape from '../../assets/images/shapes/triangle.svg';
import CircleShape from '../../assets/images/shapes/circle-pink.svg';
import MainButton from '../MainButton';
import './SubscribeSection.css';
import useModal from '../Modal/useModal';

function SubscribeSection() {
    const { openModal } = useModal();
    const [email, setEmail] = useState('');
    const [agreed, setAgreed] = useState(false); // чекбокс

    function handleClick() {
    if (email.trim() !== '' && agreed) {
        openModal('Email успішно відправлено!');
    }
    }

    return (
    <section className="subscribe-section">
        <div className="triangle-shape">
        <img src={TriangleShape} alt="triangle" />
        </div>
        <div className="email-box">
        <h2>
            Sign up For <span>Exclusive Deals</span> <br /> and Updates
        </h2>
        <p>Get 10% off your next order and stay updated with our latest offers.</p>
        <div className="email-input">
            <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <MainButton text="Subscribe →" onClick={handleClick} className='subscribe-btn'/>
        </div>
        <label className="checkbox-label">
            <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            />
            <p>
            I agree to the <span>Privacy Policy</span>.
            </p>
        </label>
        </div>
        <div className="circle-shape">
        <img src={CircleShape} alt="circle" />
        </div>
    </section>
    );
}

export default SubscribeSection;
