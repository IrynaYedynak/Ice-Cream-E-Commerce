import { Link } from 'react-router-dom';  // імпорт Link
import MainButton from "./MainButton";
import './ProductCard.css'
import '../index.css'
import RatingStar from '../assets/images/rateStar.svg'

function ProductCard ({ id, image, title, price, rating }) {
    return (
        <div className="product-card">
            <div className="card-image">
                <img src={image} alt={title} />
            </div>

            <div className="rating">
                <span className="rating-star">
                    <img src={RatingStar} alt="rating-star" />
                </span>
                <span>{rating}/5</span>
            </div>

            <h3>
                <Link to={`/product/${id}`} className="product-title-link">
                    {title}
                </Link>
            </h3>

            <p>${price}</p>
            <MainButton text="Add to Cart →" color='pink'/>
        </div>
    )
}

export default ProductCard;
