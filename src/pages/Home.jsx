import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    '/src/assets/dept.jpg',
    '/src/assets/dept_2.jpeg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const objectives = [
    {
      icon: "🎓",
      title: "Skill Development",
      description: "Organize workshops, seminars, and technical talks to introduce students to cutting-edge technologies and industry best practices."
    },
    {
      icon: "🤝",
      title: "Professional Network",
      description: "Create platforms for students to connect with peers, alumni, and industry experts, expanding their professional network."
    },
    {
      icon: "⭐",
      title: "Alumni Network",
      description: "Establish a robust alumni network to foster mentorship, networking, and lifelong connections for current students."
    },
    {
      icon: "💡",
      title: "Mentorship & Support",
      description: "Provide mentorship and support for students undertaking projects and research initiatives."
    }
  ];

  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="relative w-full h-96 sm:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentSlide === index ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-2 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? 'bg-cyan-400 w-8' : 'bg-slate-400'
              }`}
            />
          ))}
        </div>

        <div className="hero-container relative z-10">
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
          </motion.div>
        </div>
      </section>

      {/* About Us & Objectives Section */}
      <section id="about" className="section bg-slate-950 border-t border-cyan-500/20">
        <div className="section-container">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 pb-8 border-b border-cyan-500/30">About Us</h2>
          <div className="grid-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Who Are We?</h3>
              <p className="section-description">
                We are a non-profit society led by the students of the Department of Electronics & Communication Engineering, NIT Durgapur. This Society is formed to make the students develop professional and technical skills to meet the growing industrial challenges.
              </p>
              <p className="section-description">
                Our mission at ECESS is to foster a vibrant community of ECE students at NIT Durgapur, providing them with opportunities to enhance their professional and technical skills. We aim to bridge the gap between academia and industry, equipping students with the knowledge necessary to excel in this field.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Our Objectives</h3>
              {objectives.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-4 backdrop-blur-sm hover:border-cyan-400/50 transition-all"
                >
                  <div>
                    <h4 className="text-white font-semibold mb-1">{objective.title}</h4>
                    <p className="text-slate-300 text-sm">{objective.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="section bg-slate-900/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="section-title">Featured Events</h2>
            <p className="section-subtitle">Explore our upcoming and past events</p>
          </motion.div>

          <div className="flex justify-center">
            <Link to="/events" className="btn-primary">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Post Bearers Section */}
      <section className="section bg-slate-950 border-t border-cyan-500/20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="section-title">Our Leadership</h2>
            <p className="section-subtitle">Meet the team leading ECESS</p>
          </motion.div>

          <div className="flex justify-center">
            <Link to="/team" className="btn-primary">
              View Full Team
            </Link>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">Join Our Community</h2>
            <p className="cta-description">
              Be part of a vibrant community of engineers, innovators, and technology enthusiasts
            </p>
            <Link to="/team" className="btn-white">
              Meet Our Team
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
