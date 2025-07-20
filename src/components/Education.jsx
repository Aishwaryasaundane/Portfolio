import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Master in Computer Application(MCA)",
      field: "Computer Application",
      institution: "K.K. Wagh Institute of Engineering Education & Research, Nashik. ",
      location: "Nashik, Maharashtra",
      duration: "2023 - 2025",
      status: "Completed",
       cgpa: "8.82 CGPA",
      highlights: [
        "Learning backend development and database systems",
        "Completed projects using Node.js and MongoDB",
        "Active participation in coding competitions and tech events"
      ]
    }, {
      degree: "Bachelor's in Computer Application(BCA)",
      field: "Computer Application",
      institution: "RSSPM’S NYNC Arts,Sci &com.college ",
      location: "Chalisgaon, Maharashtra",
      duration: "2020 - 2023",
      status: "Completed",
       cgpa: "9.82 CGPA",
      highlights: [
         "Built strong programming fundamentals",
         "Worked on academic projects using PHP and MySQL",
          "Involved in coding contests and seminars"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education & <span className="text-purple-400">Graduation</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                        <h4 className="text-xl text-purple-400 mb-2">{edu.field}</h4>
                        <p className="text-lg text-gray-300 font-medium">{edu.institution}</p>
                      </div>
                      
                      <div className="mt-4 md:mt-0 space-y-2">
                        <div className="flex items-center text-gray-400">
                          <Calendar className="h-5 w-5 mr-2" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPin className="h-5 w-5 mr-2" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <GraduationCap className="h-5 w-5 mr-2" />
                          <span>{edu.cgpa}</span>
                        </div>
                        <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm">
                          {edu.status}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-3">Key Highlights:</h5>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-gray-300">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Academic Philosophy</h3>
            <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
              My academic journey is driven by a passion for understanding the theoretical foundations of computer science 
              while applying practical skills to real-world problems. I believe in continuous learning and staying curious 
              about emerging technologies in the ever-evolving field of software development.
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Education;