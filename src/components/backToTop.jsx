import './backToTop.css'
import { useState, useEffect } from "react";

function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
        if (window.scrollY > 200) {
            setVisible(true);
        } else {
            setVisible(false);
        }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    };

    return (
        visible && (
        <button 
            onClick={scrollToTop} 
            className="back-to-top"
        >
            ⬆
        </button>
        )
    );
}

export default BackToTop;
