import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20">
              <User className="h-12 w-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed">
                I am a dedicated Backend Developer and Computer Application student with a passion for creating 
                robust and scalable server-side applications. Completed my MCA degree while 
                gaining practical experience through various projects and internships.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md rounded-2xl p-6 border border-purple-500/20">
              <Target className="h-8 w-8 text-purple-400 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Goals</h4>
              <p className="text-gray-300">
                To leverage my technical skills in backend development to create innovative solutions 
                that solve real-world problems and contribute to cutting-edge technology projects.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md rounded-2xl p-6 border border-purple-500/20">
              <Heart className="h-8 w-8 text-purple-400 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Interests</h4>
              <p className="text-gray-300">
                Creating websites using WordPress,Writing backend code in PHP and Node.js,
                Making and connecting APIs,Working with MySQL and MongoDB databases.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
            <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
              As an MCA student, my interest in how software works behind the scenes led me to backend development. 
              Through academic projects and self-learning, I’ve gained hands-on experience with Node.js, PHP, MySQL, and MongoDB. 
              I'm focused on writing clean code and continuously learning to keep up with industry trends.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;