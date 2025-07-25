import { CartContext } from "./CartContext";
import { useContext } from "react";

export function useCart() {
    return useContext(CartContext);
}
