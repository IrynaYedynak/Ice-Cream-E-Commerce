import { Link } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";
import './CheckoutPage.css';

const CheckoutPage = () => {
    return (
    <div className="checkout-page">
        <div className="checkout-content">
        <Link to="/cart" className="back-to-cart-link">← Back to Cart</Link>
        <CheckoutForm />
        <CheckoutSummary />
        </div>
        
    </div>
    );
};

export default CheckoutPage;
