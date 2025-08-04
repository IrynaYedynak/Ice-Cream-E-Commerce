import Facebooksymb from "../../assets/images/Symbol-facebook.svg"
import Instagramsymb from "../../assets/images/Symbol-instagram.svg"
import Youtubesymb from "../../assets/images/Symbol-youtube.svg"
import './TeamMemberCard.css'


function TeamMemberCard( { image, name, role } ) {
    return(
        <div className="member-card">
            <div className="member-card-image">
                <img src={image} alt={name} />
            </div>

            <div className="member-name">
                <h3>{name}</h3>
                <p>{role}</p>
            </div>
            <div className="member-socials">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img src={Facebooksymb} alt="symbol" /></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src={Instagramsymb} alt="symbol" /></a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"> 
                <img src={Youtubesymb} alt="symbol" /></a>
            </div>
        </div>
    )
}

export default TeamMemberCard