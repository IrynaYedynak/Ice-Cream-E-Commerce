import { useCart } from "../Cart/useCart";
import "./CheckoutSummary.css";

const CheckoutSummary = () => {
    const { cartItems } = useCart();

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="checkout-summary">
        <h3>Items</h3>
        <ul className="summary-list">
            {cartItems.map((item) => (
            <li key={`${item.id}-${item.size}`}>
                <strong>{item.quantity} x {item.title}</strong>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
            ))}
        </ul>
        <div className="summary-total">
            <strong>Grand Total:</strong>
            <span>${total.toFixed(2)}</span>
        </div>
        </div>
    );
    };

export default CheckoutSummary;
