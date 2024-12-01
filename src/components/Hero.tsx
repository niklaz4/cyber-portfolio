import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Network, Linkedin, Github } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const Hero = ({ projectsRef }) => {
  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Nicollas Alcântara
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-12">
            <Typewriter
              options={{
                strings: ['Penetration Testing', 'Application Security', 'Incident Response', 'Threat Intelligence'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <div className="flex justify-center gap-8 mb-12">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-gray-800/50 rounded-lg"
            >
              <Shield className="w-12 h-12 text-cyan-400" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-gray-800/50 rounded-lg"
            >
              <Lock className="w-12 h-12 text-cyan-400" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-gray-800/50 rounded-lg"
            >
              <Network className="w-12 h-12 text-cyan-400" />
            </motion.div>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            <motion.a
              href="https://www.linkedin.com/in/nicollas-alcantara/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Linkedin className="w-10 h-10" />
            </motion.a>
            <motion.a
              href="https://github.com/niklaz4"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Github className="w-10 h-10" />
            </motion.a>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="bg-cyan-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-cyan-600 transition-colors"
          >
            View Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;