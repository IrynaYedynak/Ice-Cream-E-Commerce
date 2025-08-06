import './FeaturedProducts.css';
import { Link } from 'react-router-dom';
import GelatoImage1 from '../../assets/images/flavor-image1.svg';
import GelatoImage2 from '../../assets/images/flavor-image2.svg';
import GelatoImage3 from '../../assets/images/flavor-image3.svg';
import GelatoImage4 from '../../assets/images/flavor-image4.svg';

const featuredItems = [
    { id: 1, name: "Pistachio", oldPrice: 9.8, newPrice: 4.99, img: GelatoImage4 },
    { id: 2, name: "Vanilla", oldPrice: 9.8, newPrice: 4.99, img: GelatoImage3 },
    { id: 3, name: "Chocolate", oldPrice: 9.8, newPrice: 4.99, img: GelatoImage2 },
    { id: 4, name: "Strawberry", oldPrice: 9.8, newPrice: 4.99, img: GelatoImage1 },
];

export default function FeaturedProducts() {
    return (
    <div className="featured-products">
        <h4>Featured Products</h4>
        {featuredItems.map(item => (
        <Link to={`/product/${item.id}`} key={item.id} className="featured-item">
            <img src={item.img} alt={item.name} />
            <div className="featured-info">
            <p className="product-name">{item.name}</p>
            <p className="prices">
                <span className="old-price">${item.oldPrice.toFixed(2)}</span>{" "}
                <span className="new-price">${item.newPrice.toFixed(2)}</span>
            </p>
            </div>
        </Link>
        ))}
    </div>
    );
}
