import { useState } from "react";
import './Carousel.css'; 


function Carousel({ items, CardComponent, cardsToShow = 3 }) {
    const [index, setIndex] = useState(0);
    const total = items.length;

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + total) % total);
    };

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % total);
    };

    const visibleCards = [];
    for (let i = 0; i < cardsToShow; i++) {
        visibleCards.push(items[(index + i) % total]);
    }

    return (
        <div className="carousel-container">
            <button onClick={handlePrev} className="carousel-btn" aria-label="Previous">
                ←
            </button>

            <div className="carousel-track">
                {visibleCards.map((item, i) => (
                    <CardComponent key={i} {...item} />
                ))}
            </div>

            <button onClick={handleNext} className="carousel-btn" aria-label="Next">
                →
            </button>
        </div>
    );
}

export default Carousel;
