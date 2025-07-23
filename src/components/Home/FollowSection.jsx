import FollowImg1 from '../../assets/images/follow-image1.svg'
import FollowImg2 from '../../assets/images/follow-image2.svg'
import FollowImg3 from '../../assets/images/follow-image3.svg'
import FollowImg4 from '../../assets/images/follow-image4.svg'
import FollowImg5 from '../../assets/images/follow-image5.svg'
import PinkCircle from '../../assets/images/shapes/pink-circle-background.svg'
import PurpleCircle from '../../assets/images/shapes/purple-circle-background.svg'
import './FollowSection.css'

function FollowSection() {

    return(
        <section className="follow-section">
            <div className="follow-section-title">
                <h2>Follow Us on <span>Instagram</span></h2>
                <p>Join our Instagram community for updates, special deals, and more!</p>
            </div>
            <div className="image-wrapper">
                <div className="follow-images">
                    <img src={FollowImg1} alt="image" />
                    <img src={FollowImg2} alt="image" />
                    <img src={FollowImg3} alt="image" />
                    <img src={FollowImg4} alt="image" />
                    <img src={FollowImg5} alt="image" />
                </div>
                <img src={PinkCircle} alt="circle" className='circle left' />
                <img src={PurpleCircle} alt="circle" className='circle right' />
            </div>
        </section>
    )
}

export default FollowSection