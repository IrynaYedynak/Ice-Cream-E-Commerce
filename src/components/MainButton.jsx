import './MainButton.css'

function MainButton({ text, color = 'pink', className = "", onClick, type = 'button' }) {
    return (
    <button
        type={type}
        className={`contact-button ${color} ${className}`}
        onClick={onClick}
    >
        {text}
    </button>
    );
}

export default MainButton;
