import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white"
        >
          About Me
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6"
          >
            <p className="text-gray-600 dark:text-gray-300">
              Seeking an entry-level Developer position to utilize foundational knowledge in 
              Java/Python programming, web development, and database management, aiming to 
              deliver efficient, scalable solutions while enhancing technical abilities through 
              real-world experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold  mb-3 text-blue-600 dark:text-blue-400">Education</h3>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">Computer Science & Engineering (B.Tech)</h4>
                <p className="text-gray-600 dark:text-gray-300">V S M College of Engineering</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2020 – 2024 | CGPA: 7.69</p>
                <br></br>
                <h4 className="font-semibold text-gray-800 dark:text-white">MPC (INTER)</h4>
                <p className="text-gray-600 dark:text-gray-300">G R C Jr College</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2018 – 2020 | CGPA: 7.8</p>
                <br></br>
                <h4 className="font-semibold text-gray-800 dark:text-white">School (10th)</h4>
                <p className="text-gray-600 dark:text-gray-300">Z P High School</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2017 – 2018 | CGPA: 9.7</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">Internship</h3>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">Software Trainee</h4>
                <p className="text-gray-600 dark:text-gray-300 "><a href='https://www.crio.do/learn/portfolio/eswarchittala13/'><u>Crio.do</u></a></p>
                <p className="text-sm text-gray-500 dark:text-gray-400">05/2025 – Present</p>
                <br></br>
                <h4 className="font-semibold text-gray-800 dark:text-white">Python Full Stack</h4>
                <p className="text-gray-600 dark:text-gray-300 "><a href='https://share.google/x5Tl7kNmq57RfaXGN'><u>pentagon space</u></a></p>
                <p className="text-sm text-gray-500 dark:text-gray-400">05/2024 – 01/2025</p>
                <br></br>
                <h4 className="font-semibold text-gray-800 dark:text-white">Web Application Developer Intern</h4>
                <p className="text-gray-600 dark:text-gray-300">MSNM Technologies Pvt Ltd</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">05/2023 – 07/2023</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;