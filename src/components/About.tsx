import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Code } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                I am a Computer Science and Information Security student, with 1 year of experience in cybersecurity, I specialize in penetration testing,
                vulnerability assessment, and secure code. My passion lies in helping organizations
                strengthen their security posture through comprehensive testing and implementation of
                robust security measures.
              </p>
              
              <div className="flex items-center gap-4">
                <Terminal className="w-6 h-6 text-cyan-400" />
                <span>Advanced Penetration Testing</span>
              </div>
              
              <div className="flex items-center gap-4">
                <Shield className="w-6 h-6 text-cyan-400" />
                <span>Security Architecture Design</span>
              </div>
              
              <div className="flex items-center gap-4">
                <Code className="w-6 h-6 text-cyan-400" />
                <span>Security Automation</span>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Certified Appsec Practitioner (CAP) - The SecOps Group</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>ISO/IEC 27001:2022 Information Security Associate - Skillfront </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>DCPT (in progress)</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>SYCP (in progress)</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;