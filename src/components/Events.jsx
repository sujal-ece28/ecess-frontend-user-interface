import './Events.css';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "TechFest 2024",
      date: "2024-03-15",
      type: "Competition",
      description: "Our biggest tech celebration of the year! Join us for exciting robotics battles, coding marathons, and mind-blowing innovation demos.",
      status: "upcoming",
      participants: "200+"
    },
    {
      id: 2,
      title: "IoT Workshop",
      date: "2024-02-20",
      type: "Workshop",
      description: "Get your hands dirty with IoT! We'll build smart devices together and learn how everyday objects can become intelligent.",
      status: "completed",
      participants: "50+"
    },
    {
      id: 3,
      title: "Industry Connect",
      date: "2024-04-10",
      type: "Seminar",
      description: "Meet the tech leaders shaping tomorrow! Hear real stories from industry veterans and discover your next career move.",
      status: "upcoming",
      participants: "150+"
    },
    {
      id: 4,
      title: "Circuit Design Challenge",
      date: "2024-01-25",
      type: "Competition",
      description: "Think you can design the next breakthrough circuit? Put your skills to the test with professional-grade tools and compete with the best!",
      status: "completed",
      participants: "75+"
    }
  ];

  return (
    <section id="events" className="events">
      <div className="events-container">
        <div className="section-header">
          <h2 className="section-title">
            &gt; Events <span className="highlight">Hub</span>
          </h2>
          <p className="section-subtitle">
            /* Where great minds meet and amazing things happen */
          </p>
        </div>

        <div className="events-grid">
          {events.map(event => (
            <div key={event.id} className={`event-card ${event.status}`}>
              <div className="event-header">
                <div className="event-status">
                  <span className={`status-indicator ${event.status}`}></span>
                  {event.status.toUpperCase()}
                </div>
                <div className="event-type">{event.type}</div>
              </div>
              
              <h3 className="event-title">{event.title}</h3>
              <p className="event-description">{event.description}</p>
              
              <div className="event-details">
                <div className="event-date">
                  {new Date(event.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="event-participants">
                  {event.participants} participants
                </div>
              </div>
              
              <div className="event-actions">
                <button className="btn-event">
                  {event.status === 'upcoming' ? 'Register Now' : 'View Details'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="events-cta">
          <h3>Got an awesome event idea?</h3>
          <p>We're always looking for passionate organizers! Join our team and help create unforgettable experiences for the tech community.</p>
          <button className="btn btn-primary">Let's Make It Happen</button>
        </div>
      </div>
    </section>
  );
};

export default Events;