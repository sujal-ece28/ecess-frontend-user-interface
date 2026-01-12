import { motion } from 'framer-motion';
import { eventsData } from '../data/eventsData';
import { useEffect, useState } from 'react';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="hero">
        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Our Events</h1>
            <p className="hero-description">
              Discover our exciting events, workshops, and seminars designed to enhance your technical skills
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section bg-slate-50">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            viewport={{ once: true }}
            className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-12 text-center"
          >
            Our Events
          </motion.h2>

          {/* Events Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {eventsData.map((event) => (
              <motion.div
                key={event.id}
                className="event-card bg-slate-900/80 border-cyan-500/20 hover:border-cyan-400/50"
                variants={itemVariants}
              >
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                </div>
                <div className="event-content text-white">
                  <h3 className="event-title text-white">{event.title}</h3>
                  <div className="event-meta text-slate-300">
                    <span>📍 {event.location}</span>
                    <span>📅 {event.date}</span>
                  </div>
                  <p className="event-description line-clamp-3 text-slate-300">{event.description}</p>
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold transition-colors"
                  >
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedEvent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedEvent(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500/30"
          >
            <div className="relative">
              <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-96 object-cover" />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">{selectedEvent.title}</h2>
              <div className="flex gap-6 mb-6 text-slate-300">
                <span>📍 {selectedEvent.location}</span>
                <span>📅 {selectedEvent.date}</span>
                <span>🕐 {selectedEvent.time}</span>
              </div>
              <p className="text-slate-300 leading-relaxed">{selectedEvent.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Events;
