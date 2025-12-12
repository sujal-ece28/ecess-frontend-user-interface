import './TeamCard.css';

const TeamCard = ({ 
  avatar, 
  name, 
  role, 
  linkedin, 
  email 
}) => {
  return (
    <div className="team-card">
      <div className="team-avatar">
        <img src={avatar || '/src/assets/ecess_nitdgp.jpg'} alt={name} />
      </div>
      
      <div className="team-info">
        <h3 className="team-name">{name}</h3>
        <p className="team-role">{role}</p>
      </div>
      
      {(linkedin || email) && (
        <div className="team-social">
          {linkedin && (
            <a href={linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/icons/linkedin.png" alt="LinkedIn" />
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`} className="social-link">
              <img src="/src/assets/icons/gmail.jpg" alt="Email" />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default TeamCard;