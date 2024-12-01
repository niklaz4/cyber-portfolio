import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Penetration Testing', level: 90 },
  { name: 'Network Security', level: 85 },
  { name: 'Security Architecture', level: 80 },
  { name: 'Incident Response', level: 75 },
  { name: 'Cloud Security', level: 85 },
  { name: 'Security Automation', level: 80 },
];

const Skills = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Skills
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="h-full bg-cyan-400 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;