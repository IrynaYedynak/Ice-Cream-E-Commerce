import { useState } from "react";
import products from "./products";
import SidebarFilters from "./SidebarFiltres";
import ProductList from "./ProductList";
import ShopHeader from "./ShopHeader";
import './ProductCatalog.css'

const PRODUCTS_PER_PAGE = 6;

function ProductCatalog() {
    const [searchQuery, setSearchQuery] = useState('');
    const [maxPrice, setMaxPrice] = useState(10);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [sortOption, setSortOption] = useState('default');
    const [currentPage, setCurrentPage] = useState(1);

  // Фільтрація з урахуванням пошуку
    const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price >= 5 && product.price <= maxPrice;
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return matchesSearch && matchesPrice && matchesCategory;
    });

  // Сортування
    const sortedProducts = [...filteredProducts];
    if (sortOption === "priceLowHigh") {
    sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceHighLow") {
    sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
    }

  // Пагінація
    const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
    const validCurrentPage = Math.min(currentPage, totalPages) || 1;
    const startIndex = (validCurrentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = Math.min(startIndex + PRODUCTS_PER_PAGE, sortedProducts.length);
    const visibleProducts = sortedProducts.slice(startIndex, endIndex);

  // Обробники
    const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    };

    const handleSortChange = (option) => {
    setSortOption(option);
    setCurrentPage(1);
    };

    const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
    };

    return (
    <div className="shop-page">
        <ShopHeader
        totalProducts={sortedProducts.length}
        visibleRange={[startIndex + 1, endIndex]}
        onSortChange={handleSortChange}
        onSearchChange={handleSearchChange}
        />
        <div className="shop-content">
        <SidebarFilters
            onPriceChange={setMaxPrice}
            onCategoryChange={setSelectedCategories}
        />
        <main className="product-section">
            <ProductList
            products={visibleProducts}
            totalPages={totalPages}
            currentPage={validCurrentPage}
            onPageChange={handlePageChange}
            />
        </main>
        </div>
    </div>
    );
}

export default ProductCatalog;


