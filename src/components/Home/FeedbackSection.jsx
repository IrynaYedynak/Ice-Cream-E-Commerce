import Avatar1 from '../../assets/images/customer-avatar1.svg'
import Avatar2 from '../../assets/images/customer-avatar2.svg'
import Avatar3 from '../../assets/images/customer-avatar3.svg'
import Avatar4 from '../../assets/images/customer-avatar4.svg'
import Avatar5 from '../../assets/images/customer-avatar5.svg'
import Avatar6 from '../../assets/images/customer-avatar6.svg'
import Avatar7 from '../../assets/images/customer-avatar7.svg'
import Avatar8 from '../../assets/images/customer-avatar8.svg'
import FeedbackCarousel from '../Carousel/FeedbackCarousel'
import './FeedbackSection.css'



function CustomerFeedback() {
    return(
        <section className="feedback-section">
            <div className="avatars">
                <img src={Avatar1} alt="customer-avatar" className='avatar avatar1' />
                <img src={Avatar2} alt="customer-avatar" className='avatar avatar2' />
                <img src={Avatar3} alt="customer-avatar" className='avatar avatar3' />
                <img src={Avatar4} alt="customer-avatar" className='avatar avatar4' />
            </div>
                <FeedbackCarousel />
                <div className="avatars">
                    <img src={Avatar5} alt="customer-avatar" className='avatar avatar5' />
                    <img src={Avatar6} alt="customer-avatar" className='avatar avatar6' />
                    <img src={Avatar7} alt="customer-avatar" className='avatar avatar7' />
                    <img src={Avatar8} alt="customer-avatar" className='avatar avatar8' />
                </div>
                
        </section>
    )
}
export default CustomerFeedback