import ProductTabs from './ProductTabs';
import './ProductDetail.css'
import MainButton from '../MainButton';
import { useState } from 'react';

function ProductDetail({ product }) {
    const [quantity, setQuantity] = useState(1); // початкове значення — 1

    const handleIncrease = () => {
    setQuantity(prev => prev + 1);
    };

    const handleDecrease = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1)); // не менше 1
    };
return (
    <>
    <div className="product-container">
    <div className="product-main">
        <img src={product.imageUrl} alt={product.title} className="product-image" />
        <div className="product-info">
            <h1>{product.title}</h1>
            <p className="price">${product.price}</p>
            <p className="short-desc">{product.description}</p>

            <div className="section">
            <strong>Color:</strong>
            <div className="colors">
                {product.colors.map((color, i) => (
                <span key={i} className="color-dot" style={{ background: color }}></span>
                ))}
            </div>
            </div>

            <div className="section">
            <strong>Size:</strong>
            <div className="sizes">
                {product.sizes.map((size, i) => (
                <button key={i} className="size-btn">{size}</button>
                ))}
            </div>
            </div>

            <div className="actions">
                <div className="quantity-wrapper">
                <button className="quantity-btn" onClick={handleDecrease}>-</button>
                <span>{quantity}</span>
                <button className="quantity-btn" onClick={handleIncrease}>+</button>
                </div>
                <MainButton text='Add to Cart →' />
                </div>
            </div>
        </div>
        </div>

        <ProductTabs
        description={product.fullDescription}
        additionalInfo={product.additionalInfo}
        reviews={product.reviews}
        />
    </>
    );
}

export default ProductDetail