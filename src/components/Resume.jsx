import React from 'react';
import { motion } from 'framer-motion';

export function Resume() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Resume</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Resume Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-700"
          >
            <div className="aspect-[3/4] w-full overflow-hidden rounded-lg">
              <iframe
                src="/Moulishwaran M Resume.pdf"
                className="w-full h-full"
                title="Resume Preview"
              />
            </div>
          </motion.div>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-semibold text-white mb-4">Download Resume</h2>
              <p className="text-gray-300 mb-6">
                Click the button below to download my resume in PDF format.
              </p>
              <a
                href="/Moulishwaran M Resume.pdf"
                download="Moulishwaran M Resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download PDF
              </a>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-semibold text-white mb-4">Key Highlights</h2>
              <ul className="space-y-4">
                {[
                  'Master\'s in Data Science',
                  'Machine Learning & Deep Learning',
                  'Computer Vision Specialist',
                  'Data Analysis & Visualization',
                  'Natural Language Processing',
                  'Cloud Computing & DevOps'
                ].map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <svg
                      className="w-5 h-5 text-purple-400 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 