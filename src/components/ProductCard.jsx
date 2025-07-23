import MainButton from "./MainButton";
import './ProductCard.css'
import '../index.css'
import RatingStar from '../assets/images/rateStar.svg'

function ProductCard ({image, title, price, rating}) {
    return (
        <div className="product-card">
            <div className="card-image">
                <img src={image} alt="ice-cream" />
            </div>

            <div className="rating">
                <span className="rating-star">
                    <img src={RatingStar} alt="rating-star" />
                </span>
                <span>{rating}/5</span>
            </div>

            <h3>{title}</h3>
            <p>${price}</p>
            <MainButton text="Add to Cart →" color='pink'/>
        </div>
    )
}

export default ProductCard