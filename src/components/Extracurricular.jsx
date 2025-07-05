import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Code, Heart, Star, ExternalLink } from 'lucide-react';

const Extracurricular = () => {
  const activities = [
    {
      title: "Coding Club Vice President",
      organization: "K.L.E. Institute of Technology",
      duration: "2023 - Present",
      description: "Leading a team of 50+ students in organizing coding competitions, workshops, and tech talks. Responsible for curriculum planning and mentoring junior developers.",
      achievements: [
        "Organized 5+ coding competitions with 200+ participants",
        "Conducted workshops on backend development",
        "Mentored 20+ junior students in programming",
        "Increased club membership by 40%"
      ],
      icon: Users,
      category: "Leadership"
    },
    {
      title: "Open Source Contributor",
      organization: "GitHub Community",
      duration: "2022 - Present",
      description: "Active contributor to various open source projects, particularly in backend development tools and frameworks. Focus on documentation and bug fixes.",
      achievements: [
        "10+ merged pull requests across various repositories",
        "Contributed to Node.js community projects",
        "Maintained personal open source projects",
        "Active on developer forums and communities"
      ],
      icon: Code,
      category: "Development"
    },
    {
      title: "Hackathon Participant",
      organization: "Various Events",
      duration: "2022 - 2024",
      description: "Participated in multiple hackathons focusing on backend solutions and API development. Experience in rapid prototyping and team collaboration.",
      achievements: [
        "Winner at CodeFest 2023 - Best Backend Solution",
        "Runner-up at TechHack 2024",
        "Participated in 8+ hackathons",
        "Built 5+ working prototypes in 48-hour timeframes"
      ],
      icon: Trophy,
      category: "Competition"
    },
    {
      title: "Tech Community Volunteer",
      organization: "Local Developer Meetups",
      duration: "2023 - Present",
      description: "Volunteer at local tech meetups and conferences, helping with event organization and providing technical support for workshops.",
      achievements: [
        "Volunteered at 10+ tech events",
        "Assisted in organizing 3 major conferences",
        "Provided technical support for workshops",
        "Built network with industry professionals"
      ],
      icon: Heart,
      category: "Community"
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Leadership': return 'from-blue-400 to-indigo-500';
      case 'Development': return 'from-green-400 to-emerald-500';
      case 'Competition': return 'from-yellow-400 to-orange-500';
      case 'Community': return 'from-pink-400 to-rose-500';
      default: return 'from-purple-400 to-pink-500';
    }
  };

  return (
    <section id="extracurricular" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Extracurricular <span className="text-purple-400">Activities</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Beyond academics, I actively participate in various activities that enhance my skills and contribute to the tech community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
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
                <div className="flex items-center space-x-4">
                  <div className={`bg-gradient-to-r ${getCategoryColor(activity.category)} p-3 rounded-full group-hover:scale-110 transition-transform duration-300`}>
                    <activity.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {activity.title}
                    </h3>
                    <p className="text-gray-400">{activity.organization}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(activity.category)} text-white`}>
                    {activity.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center text-gray-400 mb-4">
                <Star className="h-4 w-4 mr-2" />
                <span>{activity.duration}</span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {activity.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {activity.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
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
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Beyond the Code</h3>
              <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
                These extracurricular activities have been instrumental in developing my leadership skills, 
                expanding my network, and contributing to the tech community. They complement my technical expertise 
                and help me grow as a well-rounded professional.
              </p>
              
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                  <div className="text-gray-300">Events Organized</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                  <div className="text-gray-300">Students Mentored</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">8+</div>
                  <div className="text-gray-300">Hackathons</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
                  <div className="text-gray-300">Open Source PRs</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Extracurricular;