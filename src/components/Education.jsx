import React from 'react';
import { motion } from 'framer-motion';

export function Education() {
  const educationDetails = [
    {
      degree: "Master's in Data Science",
      institution: "Periyar University",
      cgpa: "7.4",
      year: "2022 - 2024",
      description: "Specialized in advanced data analysis, machine learning, and artificial intelligence. Focused on practical applications and research in data science.",
      logo: "/logos/periyar-university.png"
    },
    {
      degree: "Bachelor's in Statistics",
      institution: "Arignar Anna Govt. Arts College",
      cgpa: "8.3",
      year: "2019 - 2022",
      description: "Comprehensive study of statistical methods, probability theory, and data analysis. Developed strong foundation in mathematical and statistical concepts.",
      logo: "/logos/anna-college.png"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Education</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey in the field of Data Science and Statistics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationDetails.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 flex-shrink-0">
                  <div className="w-full h-full bg-gray-700/50 rounded-lg p-3 border border-gray-600">
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://via.placeholder.com/150?text=${encodeURIComponent(edu.institution)}`;
                      }}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-purple-400 font-semibold">{edu.institution}</p>
                    </div>
                    <div className="bg-purple-900/50 px-4 py-2 rounded-lg border border-purple-700">
                      <span className="text-purple-300 font-semibold">CGPA: {edu.cgpa}</span>
                    </div>
                  </div>
                  <div className="text-gray-400 mb-4">{edu.year}</div>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 