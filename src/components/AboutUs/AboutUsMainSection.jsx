import './AboutUsMainSection.css'
import AboutUsMainImg from "../../assets/images/about-us-main-image.png"
import AboutUsBackground from "../../assets/images/icecream-special-rightimage.svg"
import MainButton from '../MainButton'

function AboutUsMain() {
    return(
        <section className="about-us-main">
            <div className="about-us-main-img">
                <img src={AboutUsMainImg} alt="main-image" />
            </div>
            <div className="about-us-main-text">
            <h2>Our <span>Journey</span> Began <br /> With a Simple Dream</h2>
            <p>Our goal is to make the best ice cream using only the finest, 
            <br />  
            natural ingredients. From rich, creamy classics to adventurous
            <br />
            new creations, every flavor is meticulously crafted in-house to
            <br />
            ensure the highest quality and freshness.
            <br />
            We take pride in offering a diverse range of options, including
            <br />
            dairy-free, vegan, and gluten-free choices, so everyone can find
            <br />
            their perfect scoop.
            </p>
            <MainButton 
            text="Read more →"
            color='pink'
            />
            </div>
            <div className="about-us-main-background">
                <img src={AboutUsBackground} alt="ice-cream" />
            </div>
        </section>
    )
}

export default AboutUsMain