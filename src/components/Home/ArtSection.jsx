import { useEffect, useRef, useState } from "react";
import DotsImage from '../../assets/images/shapes/dots.svg'
import TriangleImage from '../../assets/images/shapes/triangle.svg'
import PinkCircle from '../../assets/images/shapes/circle-pink.svg'
import HalfCircle from '../../assets/images/shapes/half-circle.svg'
import ArtPicture from '../../assets/images/artpicture.svg'
import './ArtSection.css'
import '../../index.css'
import MainButton from '../MainButton'
import { Link } from "react-router-dom";



function ArtSection() {
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

    return(
        <div ref={sectionRef}
        className={`art-section ${isVisible ? "visible" : ""}`} >
            <img src={DotsImage} className="shape shape-dots" alt="dots" />
            <img src={PinkCircle} className="shape shape-circle" alt="circle" />
            <div className="art-decription">
                    <img src={ArtPicture} className="art-picture" alt="ice-cream" />
                    <div className="banner-text">
                        <h2>Experience the   <br /> Art of <span>Gelato</span></h2>
                        <p>Handcrafted Flavors with Fresh, Local Ingredients.</p>
                        <p>Enjoy gelato made with the finest ingredients and <br /> traditional techniques.</p>
                        <Link to='/shop' >
                        <MainButton text="See Our Gelato Menu → " color='pink' className='banner-button'/>
                        </Link>
                    </div>
            </div>
            <img src={TriangleImage} className="shape shape-triangle" alt="triangle" />
            <img src={HalfCircle} className="shape shape-half" alt="half-circle" />
        </div>
    )
}
export default ArtSection