import { useCart } from "./useCart";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import "./CartPage.css";

const CartPage = () => {
    const { cartItems, updateQuantity, removeItem } = useCart();

    return (
        <div className="cart-page">
            <div className="cart-items-list">
                <h2>Shopping Cart ({cartItems.length} Items)</h2>
                {cartItems.map(item => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onQuantityChange={updateQuantity}
                        onRemove={removeItem}
                    />
                ))}
                <a href="/shop" className="continue-shopping">← Continue Shopping</a>
            </div>
            <OrderSummary />
        </div>
    );
};

export default CartPage;


