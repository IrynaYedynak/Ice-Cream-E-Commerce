import "./TeamMemberSection.css"
import TeamMemberCard from "./TeamMemberCard"
import members from "./members"
import Carousel from "../Carousel/Carousel"

function TeamMemberSection() {
    return (
    <section className="member-section"> 
    <div className="banner-text-member">
        <h2>Our <span>Team</span> Members</h2>
        <p>Get to know the friendly faces behind your favorite flavors.</p>
    </div>
    <Carousel 
        items={members} 
        CardComponent={TeamMemberCard} 
        cardsToShow={3} 
    />
    </section>
    )
}
export default TeamMemberSection