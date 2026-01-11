import { motion } from 'framer-motion';
import { facultyData } from '../data/facultyData';
import { useEffect } from 'react';

const Faculty = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
            Faculty Advisors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-300 text-lg max-w-2xl mx-auto"
          >
            Distinguished faculty members who guide and mentor our society with their expertise and wisdom
          </motion.p>
        </div>
      </section>

      {/* Faculty Members Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facultyData.map((faculty, index) => (
              <motion.div
                key={faculty.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card p-8 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                  <div className="flex-shrink-0">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-32 h-32 rounded-full object-cover shadow-lg"
                    />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{faculty.name}</h3>
                    <p className="text-primary-600 font-semibold text-lg mb-1">{faculty.designation}</p>
                    <p className="text-gray-600 mb-2">{faculty.department}</p>
                    <p className="text-gray-700 font-medium mb-3">{faculty.qualification}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">Specialization:</h4>
                      <p className="text-gray-600 text-sm">{faculty.specialization}</p>
                    </div>
                    
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={`mailto:${faculty.email}`}
                      className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">{faculty.email}</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Faculty;