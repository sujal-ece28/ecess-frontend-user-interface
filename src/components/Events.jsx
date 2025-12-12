import EventCard from './EventCard';
import './Events.css';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Tech Symposium 2024",
      description: "Annual technical symposium featuring cutting-edge research presentations and industry insights.",
      date: "Mar 15, 2024",
      type: "featured",
      image: "/src/assets/ecess_nitdgp.jpg"
    },
    {
      id: 2,
      title: "Coding Workshop",
      description: "Hands-on workshop on modern web development technologies and best practices.",
      date: "Feb 28, 2024",
      type: "default"
    },
    {
      id: 3,
      title: "Industry Connect",
      description: "Networking event connecting students with industry professionals and alumni.",
      date: "Jan 20, 2024",
      type: "past"
    }
  ];

  return (
    <section className="events section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our <span className="highlight">Events</span></h2>
          <p className="section-description">
            Join us for exciting events, workshops, and networking opportunities 
            that enhance your technical skills and professional growth.
          </p>
        </div>
        
        <div className="events-grid">
          {events.map(event => (
            <EventCard
              key={event.id}
              title={event.title}
              description={event.description}
              date={event.date}
              type={event.type}
              image={event.image}
            />
          ))}
        </div>
        
        <div className="events-cta">
          <button className="btn btn-primary">View All Events</button>
        </div>
      </div>
    </section>
  );
};

export default Events;