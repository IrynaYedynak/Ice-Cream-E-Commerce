import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";
import './CheckoutPage.css';

const CheckoutPage = () => {
    return (
    <div className="checkout-page">
        <CheckoutForm />
        <CheckoutSummary />
    </div>
    );
};

export default CheckoutPage;
