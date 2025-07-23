import BackgroundPicture from '../../assets/images/main-background-picture.svg'
import BannerPicture from '../../assets/images/banner-image.svg'
import WaveSVG from '../../assets/images/main-section-footer.svg'
import Tilt from 'react-parallax-tilt';
import MainButton from '../MainButton';
import { Link } from 'react-router-dom';
import './MainSection.css'
import '../../index.css'


function MainSection() {
    return(
        <div className="main">
            <div className="mainbackground">
                <img src={BackgroundPicture} alt="ice-cream" className='background-picture' />
            </div>
                <div className="main-section">
                    <div className="banner-text">
                        <h3>&mdash; Welcome to The</h3>
                        <h1>Discover <span>Sweet</span> <br /> Delights!</h1>
                        <p>Relish the timeless taste of handcrafted ice cream, made <br /> with passion and the finest ingredients.</p>
                        <Link to="/shop">
                            <MainButton text="Browse Our Classic Flavours →" color='purple' className='banner-button'/>
                        </Link>
                    </div>
                        <Tilt
                            reset={false}
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                            transitionSpeed={1000}
                            className="banner-picture"
                            >
                            <img src={BannerPicture} alt="Big ice-cream" />
                        </Tilt>
                    </div>
                    <div className="wave-bottom">
                <img src={WaveSVG} alt="wave bottom" />
                </div>    
        </div>
    )
}

export default MainSection