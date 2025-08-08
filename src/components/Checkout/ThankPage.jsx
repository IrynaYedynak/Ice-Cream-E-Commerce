import { Link } from "react-router-dom";
import "./ThankPage.css";

const ThankPage = () => {
    return (
    <div className="thank-you-page">
        <h1>Thank You for Your Order!</h1>
        <p>Your order has been placed successfully. We will contact you soon.</p>
        <Link to="/shop" className="back-home-link">← Back to Shop</Link>
    </div>
    );
};

export default ThankPage;
