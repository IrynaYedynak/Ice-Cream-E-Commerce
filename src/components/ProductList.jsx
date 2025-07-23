import ProductCard from "./ProductCard";
import './ProductList.css';

function ProductList({ products, totalPages, currentPage, onPageChange }) {
    return (
        <>
            <div className="products-grid">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id} 
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        rating={product.rating}
                    />
                ))}
            </div>

            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => onPageChange(i + 1)}
                        className={currentPage === i + 1 ? 'active' : ''}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </>
    );
}

export default ProductList;


