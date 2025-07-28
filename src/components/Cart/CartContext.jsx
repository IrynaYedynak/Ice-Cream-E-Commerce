import { createContext, useState, useEffect } from "react";

// Створюється контекст
export const CartContext = createContext();

function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    async function fetchCartItems() {
        try {
            const response = await fetch("http://localhost:3000/products");
            if (!response.ok) throw new Error("Failed to fetch cart items");
            const data = await response.json();
            setCartItems(data);
        } catch (err) {
            console.error(err);
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
