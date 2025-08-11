import { useState, useEffect } from "react";
import './Carousel.css'; 

function Carousel({ items, CardComponent, cardsToShow = 3 }) {
    const [index, setIndex] = useState(0);
    const [cardsVisible, setCardsVisible] = useState(cardsToShow);
    const total = items.length;

    useEffect(() => {
        const updateCardsToShow = () => {
            const width = window.innerWidth;
            if (width <= 576) {
                setCardsVisible(1);
            } else if (width <= 1024) {
                setCardsVisible(2);
            } else {
                setCardsVisible(3);
            }
        };

        updateCardsToShow();

        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    }, []);

    // Обробка переходів, щоб індекс був коректним
    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + total) % total);
    };

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % total);
    };

    // Відбираємо видимі картки
    const visibleCards = [];
    for (let i = 0; i < cardsVisible; i++) {
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
