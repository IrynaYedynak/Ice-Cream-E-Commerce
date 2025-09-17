import './ShopHeader.css';
import { useState } from 'react';
import { BiGridAlt } from "react-icons/bi";
import FiltersButton from './FiltersButton';

function ShopHeader({ 
    totalProducts = 9, 
    visibleRange = [1, 6], 
    onSortChange, 
    onSearchChange, 
    onOpenFilters 
}) {
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
            <div className="left-group">
                <input
                type="search"
                placeholder="Search"
                className="search-input"
                onChange={handleSearchChange}
            />
            <FiltersButton onClick={onOpenFilters}/>
            <div className="view-info">
                <button className="grid-button active">
                    <BiGridAlt />
                </button>
                <span className="results-text">
                    {visibleRange[0]}–{visibleRange[1]} of {totalProducts} results
                </span> 
            </div>
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
