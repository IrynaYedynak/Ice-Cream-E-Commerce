import LeftImage from '../../assets/images/limited-leftimage.svg'
import RightImage from '../../assets/images/limited-rightimage.svg'
import LeftDots from '../../assets/images/limited-doted.svg'
import RightWave from '../../assets/images/limited-wave.svg'
import MainButton from '../MainButton'
import { Link } from 'react-router-dom'
import './LimitedOfferSection.css'

function LimitedOfferSection() {
    return(
        <section className='limited-offer-section'>
            <div className="background-images-limited">
                <img src={LeftDots} alt="dots" className='left-dots' />
                <img src={RightWave} alt="wave" className='right-wave'/>
            </div>

            <div className="main-content-limited">
                <div className="left-image-limited">
                    <img src={LeftImage} alt="ice-cream" />
                </div>

                <div className="text-content-limited">
                    <h1>Limited <br /> time offer!</h1>
                    <p>Get 20% Off All Vegan Ice Creams!</p>
                    <Link to="/shop">
                    <MainButton 
                    text='Get this deal → '
                    color='purple'
                    />
                    </Link>
                </div>

                <div className="right-image-limited">
                    <img src={RightImage} alt="ice-cream" />
                </div>
            </div>
            

        </section>
        
    )
}

export default LimitedOfferSection