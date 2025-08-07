import { useCart } from "./useCart";
import "./OrderSummary.css";
import MainButton from "../MainButton";
import { Link } from "react-router-dom";

const OrderSummary = () => {
    const { cartItems } = useCart();

    const subTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 20;
    const grandTotal = subTotal + shipping;
    const hasItems = cartItems.length > 0;

    return (
        <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="product-details">
                <h4>Product Details:</h4>
                <div className="summary-row">
                <span>Sub Total:</span>
                <span>${subTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
                <span>Shipping:</span>
                <span>${shipping.toFixed(2)}</span>
            </div>
            </div>
            <div className="summary-row total">
                <span>Grand Total:</span>
                <span>${grandTotal.toFixed(2)}</span>
            </div>

            {hasItems ? (
                <Link to="/checkout">
                    <MainButton 
                        text="Proceed to checkout →"
                        color="pink"
                        className="checkout-btn"
                    />
                </Link>
            ) : (
                <MainButton 
                    text="Proceed to checkout →"
                    color="pink"
                    className="checkout-btn disabled"
                    disabled
                />
            )}
            <p className="secure-text">Safe and Secure Payments, Easy Returns.<br/>100% Authentic Products</p>
        </div>
    );
};

export default OrderSummary;
