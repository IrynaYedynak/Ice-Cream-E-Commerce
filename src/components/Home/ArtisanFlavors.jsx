import ProductCard from "../ProductCard";
import GelatoImage from '../../assets/images/flavor-image1.svg'
import './ArtisanFlavors.css'
import '../../index.css'
import ProductCarousel from "../ProductCarousel";

function ArtisanFlavors() {
    return (
    <section className="flavors-section"> 
    <div className="banner-text-flavors">
        <h2>Our <span>Artisan Gelato </span> Flavors</h2>
        <p>Check out our selection of artisanal gelato flavors</p>
    </div>
    <ProductCarousel />
    </section>
    )
}

export default ArtisanFlavors