import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
    setCartItems((prev) => {
        const existing = prev.find(
        (item) => item.id === product.id && item.size === product.size
        );
        if (existing) {
        return prev.map((item) =>
            item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
        } else {
        return [...prev, product];
        }
    });
    };

    const updateQuantity = (id, size, newQuantity) => {
        setCartItems(prev =>
        prev.map(item =>
            item.id === id && item.size === size
            ? { ...item, quantity: newQuantity }
            : item
        )
    );
};

    const removeItem = (id, size) => {
        setCartItems(prev =>
        prev.filter(item => !(item.id === id && item.size === size))
    );
};


    return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeItem }}>
        {children}
    </CartContext.Provider>
    );
};

export default CartProvider;

