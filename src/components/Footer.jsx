import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code2 className="h-6 w-6 text-purple-400" />
            <span className="text-xl font-bold text-white">Aishwarya Saundane</span>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart className="h-4 w-4 text-red-400 fill-current" />
            </motion.div>
            <span>and lots of</span>
            <span className="text-purple-400 font-semibold">React</span>
            <span>•</span>
            <span>© {currentYear} All rights reserved</span>
          </div>
          
          <p className="text-gray-400 text-sm mt-2">
            Backend Developer | Software Developer | Open Source Enthusiast
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;