import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductDetail from './ProductDetail';
import './ProductPage.css';

function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3001/products/${id}`)
        .then((res) => {
        if (!res.ok) throw new Error('Product not found');
        return res.json();
        })
        .then((data) => {
        setProduct(data);
        setLoading(false);
        })
        .catch((err) => {
        console.error('Fetch error:', err);
        setProduct(null);
        setLoading(false);
        });
    }, [id]);

    if (loading) return <p className="loading">Завантаження...</p>;
    if (!product) return <p className="error">Товар не знайдено.</p>;

    return <ProductDetail product={product} />;
}

export default ProductPage;
