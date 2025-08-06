import './ShopHeader.css';
import { useState } from 'react';
import { FaThLarge } from 'react-icons/fa'; // значок grid view

function ShopHeader({ totalProducts = 9, visibleRange = [1, 6], onSortChange, onSearchChange }) {
    const [sortOption, setSortOption] = useState('default');

    const handleSortChange = (e) => {
        const selected = e.target.value;
        setSortOption(selected);
        onSortChange(selected);
    };

    const handleSearchChange = (e) => {
        onSearchChange(e.target.value);
    };

    return (
        <div className="shop-header">
            <input
                type="search"
                placeholder="Search"
                className="search-input"
                onChange={handleSearchChange}
            />

            <div className="view-info">
                <button className="grid-button active">
                    <FaThLarge />
                </button>
                <span className="results-text">
                    Showing {visibleRange[0]}–{visibleRange[1]} of {totalProducts} results
                </span>
            </div>

            <select onChange={handleSortChange} value={sortOption} className="sort-select">
                <option value="default">Default Sorting ▼</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
                <option value="rating">Rating</option>
            </select>
        </div>
    );
}

export default ShopHeader;
