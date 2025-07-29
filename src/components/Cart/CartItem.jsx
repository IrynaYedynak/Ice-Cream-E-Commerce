import QuantitySelector from "./QuantitySelector"
import './CartItem.css'

function CartItem({ item, onQuantityChange, onRemove }) {

    return(
        <div className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image"  />
            <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p>Size: {item.size}</p>
            </div>

            <div className="cart-item-price">${Number(item.price).toFixed(2)}
            </div>
            
            <QuantitySelector
                quantity={item.quantity}
                onChange={(newQty) => onQuantityChange(item.id, item.size, newQty)}
            />

            <div className="cart-total-item-price">${(item.price * item.quantity).toFixed(2)}</div>

            <button onClick={() => onRemove(item.id, item.size)} className="cart-item-remove-button">x</button>

        </div>

    )
}

export default CartItem