import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Database, Server, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "College Library Management System",
      description:
        "A web app that automates daily library tasks like book inventory, issue/return tracking, and user authentication. Improves accuracy and efficiency for librarians and students.",
      technologies: {
        Frontend: ["HTML", "CSS", "JavaScript"],
        Backend: ["Java (Servlets/JSP) "],
        Database: ["MySQL/SQL"],
      },
      features: [
        "User Login System",
        "Book Management",
        "Issue & Return Tracking",
        "Reports Generation",
      ],
      icon: Database,
      demoLink: "#",
      githubLink: "https://github.com/Aishwaryasaundane",
      status: "Completed",
    },
    {
      title: "Online Book Store",
      description:
        "A web-based bookstore that lets users register, browse books, manage a shopping cart, and place orders online through an intuitive interface.",
      technologies: {
        Frontend: ["HTML", "CSS", "JavaScript"],
        Backend: ["Java (Servlets/JSP) "],
        Database: ["MySQL/SQL"],
      },
      features: [
        "User Login System",
        "Book Browsing & Search",
        "Shopping Cart",
        "Order Management",
      ],
      icon: Globe,
      demoLink: "#",
      githubLink: "https://github.com/Aishwaryasaundane",
      status: "Completed",
    },
    {
      title: "Online Examination System",
      description:
        "A web app using PHP & MySQL for secure online exams with instant results, question bank management, and exam scheduling.",
      technologies: {
        Frontend: ["HTML", "CSS", "JavaScript"],
        Backend: ["PHP"],
        Database: ["MySQL"],
      },
      features: [
        "User Login System",
        "Exam Management",
        "Question Bank",
        "Instant Results",
      ],
      icon: Server,
      demoLink: "#",
      githubLink: "https://github.com/Aishwaryasaundane",
      status: "Completed",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my key projects that showcase my backend
            development skills and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <project.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-center space-x-1">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-400"
                        : "bg-yellow-400"
                    }`}
                  ></div>
                  <span className="text-sm text-gray-400">
                    {project.status}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-purple-400 mb-2">
                  Key Features:
                </h4>
                <ul className="space-y-1">
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-400 flex items-start"
                    >
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {Object.entries(project.technologies).map(
                    ([category, techs]) =>
                      techs.map((tech, idx) => (
                        <span
                          key={category + idx}
                          className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))
                  )}
                </div>
              </div>

              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.demoLink}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Demo</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <Github className="h-4 w-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
