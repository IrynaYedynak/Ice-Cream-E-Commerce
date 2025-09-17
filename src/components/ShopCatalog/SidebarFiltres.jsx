import { useState } from "react";
import './SidebarFiltres.css';
import FeaturedProducts from './FeaturedProducts';

function SidebarFilters({ isOpen, onClose, onPriceChange, onCategoryChange }) {
    const [price, setPrice] = useState(10);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handlePriceChange = (e) => {
        const newPrice = Number(e.target.value);
        setPrice(newPrice);
        onPriceChange(newPrice);
    };

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        const updated = selectedCategories.includes(category)
            ? selectedCategories.filter((c) => c !== category)
            : [...selectedCategories, category];
        setSelectedCategories(updated);
        onCategoryChange(updated);
    };

    return (
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="sidebar-close" onClick={onClose}>
                ×
            </button>
            <div className="filter-group">
                <h4>Categories</h4>
                <ul>
                    {["Caramel Ice Cream", "Frozen Yogurt", "Ice Cream Cakes", "Milkshakes", "Popsicles"].map((cat) => (
                        <li key={cat}>
                            <label>
                                <input
                                    type="checkbox"
                                    value={cat}
                                    checked={selectedCategories.includes(cat)}
                                    onChange={handleCategoryChange}
                                />
                                {cat}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="filter-group">
                <h4>Filter by Price</h4>
                <input type="range" min="5" max="10" value={price} onChange={handlePriceChange} />
                <span>${5} - ${price}</span>
            </div>

            <FeaturedProducts />
        </aside>
    );
}

export default SidebarFilters;
