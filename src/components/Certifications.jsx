import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Backend Development Certification",
      issuer: "Tech Institute",
      date: "2024",
      status: "Completed",
      description: "Comprehensive certification covering Node.js, Express.js, databases, and API development best practices.",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      driveLink: "https://drive.google.com/file/d/your-cert-id-1"
    },
    {
      title: "Database Management Systems",
      issuer: "Online Learning Platform",
      date: "2023",
      status: "Completed",
      description: "Advanced certification in database design, optimization, and management with focus on SQL and NoSQL databases.",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Database Design"],
      driveLink: "https://drive.google.com/file/d/your-cert-id-2"
    },
    {
      title: "Cloud Computing Fundamentals",
      issuer: "Cloud Academy",
      date: "2024",
      status: "In Progress",
      description: "Learning cloud computing concepts, AWS services, and cloud-based backend deployment strategies.",
      skills: ["AWS", "Cloud Architecture", "Docker", "Deployment"],
      driveLink: "https://drive.google.com/file/d/your-cert-id-3"
    },
    {
      title: "API Development & Security",
      issuer: "Developer Institute",
      date: "2023",
      status: "Completed",
      description: "Specialized certification focusing on secure API development, authentication, and best practices.",
      skills: ["REST APIs", "JWT", "OAuth", "API Security"],
      driveLink: "https://drive.google.com/file/d/your-cert-id-4"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Certifications & <span className="text-purple-400">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Professional certifications and courses that validate my expertise in backend development and related technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {cert.status === 'Completed' ? (
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  ) : (
                    <div className="w-5 h-5 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                  )}
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    cert.status === 'Completed' 
                      ? 'bg-green-400/20 text-green-400' 
                      : 'bg-yellow-400/20 text-yellow-400'
                  }`}>
                    {cert.status}
                  </span>
                </div>
              </div>

              <div className="flex items-center text-gray-400 mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{cert.date}</span>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {cert.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-purple-400 mb-2">Skills Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={cert.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
              >
                <ExternalLink className="h-4 w-4" />
                <span>View Certificate</span>
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Commitment to Excellence</h3>
            <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
              These certifications represent my dedication to continuous learning and professional development. 
              I believe in validating my skills through recognized programs and staying current with industry standards 
              and best practices in backend development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;