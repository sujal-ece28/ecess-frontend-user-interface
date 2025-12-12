import './EventCard.css';

const EventCard = ({ 
  image, 
  title, 
  description, 
  date, 
  type = 'default',
  buttonText = 'Learn More'
}) => {
  return (
    <div className={`event-card ${type}`}>
      <div className="event-image">
        <img src={image || '/src/assets/ecess_nitdgp.jpg'} alt={title} />
        {type === 'featured' && (
          <div className="featured-badge">
            <span className="badge">Featured</span>
          </div>
        )}
      </div>
      
      <div className="event-content">
        <div className="event-header">
          <h3 className="event-title">{title}</h3>
          <div className="event-date">
            <span className="badge">{date}</span>
          </div>
        </div>
        
        <p className="event-description">{description}</p>
        
        <button className="btn btn-primary btn-small event-cta">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default EventCard;