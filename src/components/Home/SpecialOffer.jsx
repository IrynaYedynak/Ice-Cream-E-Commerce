import { useState, useEffect, useRef } from 'react'
import MainImage from '../../assets/images/specialOfferImage.svg'
import MainButton from '../MainButton'
import Triangle from '../../assets/images/shapes/triangle.svg'
import Cross from '../../assets/images/shapes/mission-cross.svg'
import ZigZag from '../../assets/images/shapes/mission-wave.svg'
import './SpecialOffer.css'
import { Link } from 'react-router-dom'

function SpecialOffer() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`offer-section ${isVisible ? "visible" : ""}`}
        >
            <img src={Triangle} alt="triangle" className="shape-special shape-triangles" />
            <img src={Cross} alt="cross" className="shape-special shape-cross" />
            <div className="section-text">
                <h1>Gelato Lovers’ Special!</h1>
                <p>Buy Any Two Gelato Pints, Get One <span>Free!</span></p>
                <Link to='/shop'>
                <MainButton text='Claim Offer →'/>
                </Link>
            </div>
            <img src={ZigZag} alt="zigzag" className="shape-special shape-zigzag" />

            <div className="section-image">
                <img src={MainImage} alt="ice-cream" />
            </div>
        </section>
    );
}

export default SpecialOffer