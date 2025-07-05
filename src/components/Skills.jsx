import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Server, Cloud, Globe, GitBranch } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: Code, color: "text-yellow-400" },
    { name: "C++", icon: Code, color: "text-blue-400" },
    { name: "Node.js", icon: Server, color: "text-green-500" },
    { name: "Express.js", icon: Server, color: "text-gray-400" },
    { name: "REST APIs", icon: Cloud, color: "text-purple-400" },
    { name: "PHP", icon: Server, color: "text-indigo-400" },
    { name: "Wordpress", icon: Globe, color: "text-blue-500" },
    { name: "MySQL", icon: Database, color: "text-blue-300" },
    { name: "PostgreSQL", icon: Database, color: "text-blue-600" },
    { name: "GitHub", icon: GitBranch, color: "text-gray-300" },
    { name: "Postman", icon: Cloud, color: "text-orange-500" },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-810"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Technical <span className="text-purple-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here's an overview of my technical expertise across various
            technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map(({ name, icon: Icon, color }) => (
            <div key={name} className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-gray-800/10 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/30 hover:backdrop-blur-md hover:border-purple-400/30 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-purple-500/10"
              >
                <Icon className={`w-8 h-8 mx-auto mb-3 ${color}`} />
                <h3 className="font-semibold mb-2 text-white">{name}</h3>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Continuous Learning
            </h3>
            <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              I'm constantly expanding my skill set and staying updated with the
              latest technologies in backend development. Currently exploring
              cloud platforms, microservices architecture, and DevOps practices
              to enhance my expertise.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
