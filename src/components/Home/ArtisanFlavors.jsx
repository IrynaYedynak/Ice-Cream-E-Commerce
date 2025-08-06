import ProductCard from "../ShopCatalog/ProductCard";
import './ArtisanFlavors.css'
import '../../index.css'
import Carousel from "../Carousel/Carousel";
import products from "../ShopCatalog/Products";

function ArtisanFlavors() {
    return (
    <section className="flavors-section"> 
    <div className="banner-text-flavors">
        <h2>Our <span>Artisan Gelato </span> Flavors</h2>
        <p>Check out our selection of artisanal gelato flavors</p>
    </div>
    <Carousel 
        items={products} 
        CardComponent={ProductCard} 
        cardsToShow={3} 
    />
    
    </section>
    )
}
export default ArtisanFlavors