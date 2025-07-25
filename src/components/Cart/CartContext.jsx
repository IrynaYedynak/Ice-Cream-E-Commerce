import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    async function fetchCartItems() {
        try {
            const response = await axios.get("http://localhost:3000/cartItems");
            setCartItems(response.data);
        } catch (err) {
            console.error("Failed to load cart items", err);
        }
    }

    useEffect(() => {
        fetchCartItems();
    }, []);

    function updateQuantity(id, newQty) {
        setCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, quantity: newQty } : item
            )
        );
    }

    function removeItem(id) {
        setCartItems(items => items.filter(item => item.id !== id));
    }

    return (
        <CartContext.Provider value={{ cartItems, updateQuantity, removeItem }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;

export function useCart() {
    return useContext(CartContext);
}



