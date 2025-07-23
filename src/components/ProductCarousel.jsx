import ProductCard from "./ProductCard";
import GelatoImage1 from '../assets/images/flavor-image1.svg'
import GelatoImage2 from '../assets/images/flavor-image2.svg'
import GelatoImage3 from '../assets/images/flavor-image3.svg'
import GelatoImage4 from '../assets/images/flavor-image4.svg'
import './ProductCarousel.css'
import { useState } from "react";

const products = [
    {
    image: GelatoImage1,
    title: "Strawberry Balsamic Gelato",
    price: "6.49",
    rating: "4.9",
    },
    {
    image: GelatoImage2,
    title: "Chocolate Hazelnut Gelato",
    price: "6.79",
    rating: "4.8",
    },
    {
    image: GelatoImage3,
    title: "Tiramisu\nGelato",
    price: "6.59",
    rating: "5.0",
    },
    {
    image: GelatoImage4,
    title: "Classic Pistachio Gelato",
    price: "6.29",
    rating: "4.8",
    },
];

function ProductCarousel() {
    const [index, setIndex] = useState(0);
    const cardsToShow = 3;
    const total = products.length;

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + total) % total);
    };

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % total);
    };

    // Вибираємо cardsToShow карток циклічно
    const visibleCards = [];
    for (let i = 0; i < cardsToShow; i++) {
        visibleCards.push(products[(index + i) % total]);
    }

    return (
        <div className="carousel-container">
            <button onClick={handlePrev} className="carousel-btn" aria-label="Previous">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M22.0003 13.0001L22.0004 11.0002L5.82845 11.0002L9.77817 7.05044L8.36396 5.63623L2 12.0002L8.36396 18.3642L9.77817 16.9499L5.8284 13.0002L22.0003 13.0001Z" />
            </svg>
            </button>

            <div className="carousel-track">
                {visibleCards.map((product, i) => (
                    <ProductCard
                        key={i}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        rating={product.rating}
                    />
                ))}
            </div>

            <button onClick={handleNext} className="carousel-btn" aria-label="Next">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="24"
                    height="24"
                >
                    <path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z" />
                </svg>
</button>


        </div>
    );
}

export default ProductCarousel;
