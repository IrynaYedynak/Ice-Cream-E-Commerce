import './FiltersButton.css'
import { FaFilter } from "react-icons/fa";

function FiltersButton({ onClick }) {
    return (
        <button className="filters-button" onClick={onClick}>
        <FaFilter />
        </button>
    );
}

export default FiltersButton;

