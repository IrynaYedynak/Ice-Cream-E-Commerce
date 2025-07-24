import QuantitySelector from "./QuantitySelector"
import RemoveIcon from "../../assets/images/remove-icon.svg"

function CartItem({ item, onQuantityChange, onRemove }) {

    return(
        <div className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image"  />
            <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p>Size: {item.size}</p>
            </div>

            <div className="cart-item-price">${item.price.toFixed(2)}</div>
            
            <QuantitySelector
                quantity={item.quantity}
                onChange={(newQty) => onQuantityChange(item.id, newQty)}
            />

            <div className="cart-total-item-price">${(item.price * item.quantity).toFixed(2)}</div>

            <button onClick={() => onRemove(item.id)} className="cart-item-remove-button">{RemoveIcon}</button>
        </div>

    )
}

export default CartItem