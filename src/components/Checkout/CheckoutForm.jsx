import { useState } from "react";
import "./CheckoutForm.css";
import MainButton from "../MainButton";
import { useCart } from "../Cart/useCart";
import { useNavigate } from "react-router-dom";


const CheckoutForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        state: "",
        city: "",
        zip: "",
        paymentMethod: "card",
        cardNumber: "",
        expirationMonth: "",
        expirationYear: "",
        securityCode: "",
    });

    const { setCartItems } = useCart(); // доступ до очищення
    const navigate = useNavigate();     // навігація

    const handleChange = (e) => {
        setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
    e.preventDefault();

  // Емуляція надсилання замовлення
    setTimeout(() => {
    setCartItems([]);         // очищаємо корзину
    navigate("/thank-you");   // редірект
  }, 500); // можна зробити 0 якщо без затримки
};

    


    return (
        <form className="checkout-form" onSubmit={handleSubmit}>
        <h3>Billing Address:</h3>
        <div className="form-grid">
            <input className="checkout-input" name="firstName" placeholder="First name" onChange={handleChange} required />
            <input className="checkout-input" name="lastName" placeholder="Last name" onChange={handleChange} required />
            <input className="checkout-input" name="email" placeholder="Email address" onChange={handleChange} required />
            <input className="checkout-input" name="state" placeholder="State" onChange={handleChange} required />
            <input className="checkout-input" name="city" placeholder="City" onChange={handleChange} required />
            <input className="checkout-input" name="zip" placeholder="Zip / postal code" onChange={handleChange} required />
        </div>

        <h4>Payment Method:</h4>
        <label>
            <input type="radio" name="paymentMethod" value="card" checked={formData.paymentMethod === "card"} onChange={handleChange} />
            Credit Card
        </label>
        <label>
            <input type="radio" name="paymentMethod" value="cod" checked={formData.paymentMethod === "cod"} onChange={handleChange} />
            Cash on Delivery
        </label>

        {formData.paymentMethod === "card" && (
            <div className="form-grid">
            <input className="checkout-input" name="cardNumber" placeholder="Card number" onChange={handleChange} required />
            <input className="checkout-input" name="expirationMonth" placeholder="Month" onChange={handleChange} required />
            <input className="checkout-input" name="expirationYear" placeholder="Year" onChange={handleChange} required />
            <input className="checkout-input" name="securityCode" placeholder="Security code" onChange={handleChange} required />
            </div>
        )}

        <MainButton
        text='Place Order Now →'
        color="pink"
        type="submit"
        />
        <p className="terms-text">
            By clicking the button, you agree to the <a href="#">Terms and Conditions</a>.
        </p>
        </form>
    );
    };

    export default CheckoutForm;
