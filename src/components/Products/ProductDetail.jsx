import { useState } from 'react';
import ProductTabs from './ProductTabs';
import './ProductDetail.css';
import MainButton from '../MainButton';
import { useCart } from '../Cart/useCart';

function ProductDetail({ product }) {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(null); // додано
    const {addToCart} = useCart();

    const handleAddToCart = () => {
    if (!selectedSize) {
        alert("Будь ласка, виберіть розмір");
        return;
    }

    const itemToAdd = {
        id: product.id,
        title: product.title,
        image: product.imageUrl,
        price: product.price,
        size: selectedSize,
        quantity: quantity
    };

    addToCart(itemToAdd); // додасть до корзини і покаже модалку
};


    const handleIncrease = () => {
    setQuantity(prev => prev + 1);
    };

    const handleDecrease = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
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
                <strong>Size:</strong>
                <div className="sizes">
                {product.sizes.map((size, i) => (
                    <button
                    key={i}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                    >
                    {size}
                    </button>
                ))}
                </div>
            </div>

            <div className="actions">
                <div className="quantity-wrap">
                <button className="quantity-btn" onClick={handleDecrease}>-</button>
                <span>{quantity}</span>
                <button className="quantity-btn" onClick={handleIncrease}>+</button>
                </div>

                <MainButton 
                text='Add to Cart →' 
                onClick={handleAddToCart}
                />
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

export default ProductDetail;
