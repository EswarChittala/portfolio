import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white"
        >
          Experience
        </motion.h2>
        
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="card p-6"
          >
            <h3 className="text-xl font-semibold mb-2 text-green-300">Web Application Developer Intern</h3>
            <p className="text-blue-600 dark:text-blue-400 mb-2">MSNM Technologies Pvt Ltd </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Developed responsive web application improving user accessibility</li>
              <li>Implemented CRUD operations and user authentication</li>
              <li>Reduced reported bugs by 15% through testing</li>
              <li>Integrated MySQL database with backend APIs</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;