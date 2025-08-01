

function TeamMemberCard(image, title, socials) {
    return(
        <div className="member-card">
            <img src={image} alt={title} />
            <div className="member-name">
                <h3>Marvin Joner</h3>
                <p>Marvin Joner</p>
            </div>
            <div className="member-socials">
                {socials}
            </div>
        </div>
    )
}

export default TeamMemberCard