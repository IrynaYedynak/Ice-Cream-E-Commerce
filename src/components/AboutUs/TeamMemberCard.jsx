import Facebooksymb from "../../assets/images/Symbol-facebook.svg"
import Instagramsymb from "../../assets/images/Symbol-instagram.svg"
import Youtubesymb from "../../assets/images/Symbol-youtube.svg"


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
                <img src={Facebooksymb} alt="symbol" />
                <img src={Instagramsymb} alt="symbol" />
                <img src={Youtubesymb} alt="symbol" />
            </div>
        </div>
    )
}

export default TeamMemberCard