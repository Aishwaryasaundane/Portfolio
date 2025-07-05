import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector("#about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center w-full flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Aishwarya
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Backend Developer
          </motion.h2>

          <motion.p
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Being a dedicated MCA Student, I aim to contribute to the progress
            of my field with creative thinking and problem solving mindset. my
            goal is to leverage my technical knowledge and innovative mindset to
            contribute to advancement in field of IT field.
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/17J-CGbiuZG9IICNeqDZYVQUM4vjBl-Tj/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full flex items-center space-x-2 hover:shadow-lg transition-all duration-300"
              >
                <Download className="h-5 w-5" />
                <span>View Resume</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/17J-CGbiuZG9IICNeqDZYVQUM4vjBl-Tj/view?usp=sharing"
                download
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full flex items-center space-x-2 hover:shadow-lg transition-all duration-300"
              >
                <Download className="h-5 w-5" />
                <span>Download Resume</span>
              </motion.a>
            </div>

            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/Aishwaryasaundane"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors duration-300"
              >
                <Github className="h-6 w-6" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/aishwarya-saundane-5968b8250"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:saundaneaishwarya75@gmail.com"
                className="p-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors duration-300"
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
};

export default Hero;
