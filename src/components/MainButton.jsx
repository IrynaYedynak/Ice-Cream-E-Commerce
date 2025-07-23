import './MainButton.css'

function MainButton({ text, color = 'pink', className = "", onClick }) {
    return (
    <button
        type="button"
        className={`contact-button ${color} ${className}`}
        onClick={onClick}
    >
        {text}
    </button>
    );
}

export default MainButton;
