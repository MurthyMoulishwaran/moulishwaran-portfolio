import React from 'react';
import { motion } from 'framer-motion';

export function Projects() {
  const projects = [
    {
      title: "Gold Price Prediction",
      description: "Developed a machine learning model using Random Forest Regression to predict gold prices based on financial indicators. Achieved an R² score of 98% and implemented a Tkinter-based GUI.",
      tools: "Python, Scikit-Learn, Pandas, Tkinter",
      link: "https://github.com/MurthyMoulishwaran/Gold-Price-Prediction",
      image: "/projects/gold-price.jpg"
    },
    {
      title: "Number Plate Detection System",
      description: "Built a real-time system using Python, OpenCV, EasyOCR, and Tkinter to detect and extract vehicle number plates from IP camera feeds.",
      tools: "OpenCV, EasyOCR, Tkinter",
      link: "",
      image: "/projects/number-plate.jpg"
    },
    {
      title: "PDF & Image Text Extraction App",
      description: "Streamlit app for extracting text from PDFs/images using Tesseract, with real-time spelling correction and PostgreSQL integration.",
      tools: "Python, Streamlit, Tesseract, SymSpell, PostgreSQL",
      link: "https://www.linkedin.com/posts/m-moulishwaran-321841248_ocr-streamlit-postgresql-activity-7324336259907145728-qvTB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1ZLIkB5Rdt3glezVP1JsCd_YaH3ZhbeVE",
      image: "/projects/text-extraction.jpg"
    },
    {
      title: "Legal Document Analyzer",
      description: "Developed a legal document analyzer using OCR, SymSpell, and DeepSeek LLM for extracting insights and supporting chatbot-based legal queries.",
      tools: "Streamlit, OpenRouter, DeepSeek, SymSpell",
      link: "https://www.linkedin.com/posts/m-moulishwaran-321841248_ai-legaltech-machinelearning-activity-7317878579109736449-Z8OA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1ZLIkB5Rdt3glezVP1JsCd_YaH3ZhbeVE",
      image: "/projects/legal-analyzer.jpg"
    },
    {
      title: "Entertainment Industry Analysis",
      description: "Created Tableau dashboards analyzing movie budgets, ratings, genre trends, and audience preferences to support decision-making.",
      tools: "Tableau",
      link: "",
      image: "/projects/entertainment.jpg"
    },
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
          <h1 className="text-4xl font-bold text-white mb-4">My Projects</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of data science and machine learning projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-700"
            >
              <div className="relative h-48 bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/800x400?text=${encodeURIComponent(project.title)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.split(", ").map((tool, i) => (
                    <span
                      key={i}
                      className="bg-purple-900/50 text-purple-300 text-sm px-3 py-1 rounded-full border border-purple-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 