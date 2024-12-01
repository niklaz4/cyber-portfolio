import React, { forwardRef, useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, Terminal, Network, Lock } from 'lucide-react';

const projects = [
  {
    title: 'CVEHunter',
    description: 'Automated searches and queries within the MITRE ATT&CK framework.',
    icon: Network,
    tags: ['Python', 'Threat Hunting', 'Automation'],
  },
  {
    title: 'C2 Server with Webcam Capture',
    description: 'demonstrates the operation of a C2 (Command and Control) server that captures webcam frames',
    icon: Shield,
    tags: ['Python', 'C2', 'React'],
  },
  {
    title: 'API Vulnerability Analyzer',
    description: 'Custom API vulnerability scanner with React and Flask',
    icon: Terminal,
    tags: ['React', 'Node.js', 'Security', 'Python/Flask'],
  },
  {
    title: 'Encryption Tool',
    description: 'Advanced file encryption and key management system',
    icon: Lock,
    tags: ['Cryptography', 'Python', 'Security'],
  },
];

const Projects = forwardRef((props, ref) => {
  
  return (
    <section ref={ref} className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-6 rounded-lg cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <project.icon className="w-8 h-8 text-cyan-400" />
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;