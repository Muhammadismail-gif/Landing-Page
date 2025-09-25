
const teamMembersData = [
    {
        id: 1,
        image: '01.jpg_1.jpeg', 
        name: 'John Doe',
        role: 'Director'
    },
    {
        id: 2,
        image: '02.jpg.jpeg', 
        name: 'Mike Doe',
        role: 'Senior Designer'
    },
    {
        id: 3,
        image: '03.jpg.jpeg', 
        name: 'Jane Doe',
        role: 'Senior Designer'
    },
    {
        id: 4,
        image: '04.jpg.jpeg', 
        name: 'Karen Doe',
        role: 'Project Manager'
    }
];

const TeamMemberCard = ({ image, name, role }) => {
    return (
        <div className="team-member-card">
            <img src={image} alt={name} className="team-member-image" />
            <h3 className="team-member-name">{name}</h3>
            <p className="team-member-role">{role}</p>
        </div>
    );
};

const TeamSection = () => {
    return (
        <section className="team-section">
            <h2 className="section-title">MEET THE TEAM</h2>
            <div className="title-underline"></div>
            <p className="section-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.
            </p>
            <div className="team-grid">
                {teamMembersData.map(member => (
                    <TeamMemberCard key={member.id} {...member} />
                ))}
            </div>
        </section>
    );
};

export default TeamSection;