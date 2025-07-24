
const QuantitySelector = ({ quantity, onChange }) => {
    return (
        <div className="quantity-wrapper">
        <button onClick={() => onChange(Math.max(1, quantity - 1))}>−</button>
        <span>{quantity}</span>
        <button onClick={() => onChange(quantity + 1)}>+</button>
        </div>
    );
};

export default QuantitySelector;
