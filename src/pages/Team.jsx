import { motion } from 'framer-motion';
import { teamData } from '../data/teamData';
import { useState, useEffect } from 'react';

const TeamCard = ({ member, index, hoveredId, setHoveredId }) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center"
    >
      <motion.div
        className="relative w-44 h-56 rounded-lg shadow-lg bg-white border border-gray-200 flex flex-col items-center justify-center p-4"
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Circular Image */}
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-md mb-3 border-2 border-cyan-500/30 flex-shrink-0">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and Position */}
        <h3 className="text-center font-semibold text-gray-900 text-xs mb-1">{member.name}</h3>
        <p className="text-center text-cyan-600 text-xs font-medium mb-3">{member.position}</p>

        {/* Social Icons - Appear on Hover */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          className="flex gap-2"
        >
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-gray-100 hover:scale-110 transition-transform"
          >
            <img src="/src/assets/linkedin.png" alt="LinkedIn" className="w-full h-full object-cover" />
          </a>
          <a
            href={member.instagram || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-gray-100 hover:scale-110 transition-transform"
          >
            <img src="/src/assets/instagram.png" alt="Instagram" className="w-full h-full object-cover" />
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="relative w-full py-20 overflow-hidden bg-slate-950 border-b border-cyan-500/20">
        <div className="absolute inset-0 opacity-10 -z-10" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(34, 211, 238, 0.1) 25%, rgba(34, 211, 238, 0.1) 26%, transparent 27%, transparent 74%, rgba(34, 211, 238, 0.1) 75%, rgba(34, 211, 238, 0.1) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-300 text-lg max-w-2xl mx-auto"
          >
            Meet the dedicated individuals who drive ECESS forward with their passion and expertise
          </motion.p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Final Year */}
          <motion.h2
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            viewport={{ once: true }}
            className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-12 text-center"
          >
            Final Year
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
            {teamData.filter(m => m.year === 'Final Year').map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>

          {/* Pre Final Year */}
          <motion.h2
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            viewport={{ once: true }}
            className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-12 text-center"
          >
            Pre Final Year
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
            {teamData.filter(m => m.year === 'Pre Final Year').length > 0 ? (
              teamData.filter(m => m.year === 'Pre Final Year').map((member, index) => (
                <TeamCard key={member.id} member={member} index={index} />
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">Coming soon...</p>
            )}
          </div>

          {/* Second Year */}
          <motion.h2
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            viewport={{ once: true }}
            className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-12 text-center"
          >
            Second Year
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamData.filter(m => m.year === 'Second Year').length > 0 ? (
              teamData.filter(m => m.year === 'Second Year').map((member, index) => (
                <TeamCard key={member.id} member={member} index={index} />
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">Coming soon...</p>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Team;
