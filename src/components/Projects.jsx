import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "OASIS Infobyte Internship",
      description: "Data Science Internship focusing on machine learning and data analysis projects.",
      technologies: ["Python", "Machine Learning", "NLP", "Data Analysis", "Logistic Regression", "TF-IDF", "Seaborn", "Plotly"],
      github: "https://www.linkedin.com/posts/m-moulishwaran-321841248_oasis-infobyte-internship-in-data-science-activity-7128032704155041792-7sIa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1ZLIkB5Rdt3glezVP1JsCd_YaH3ZhbeVE",
      live: "https://www.linkedin.com/posts/m-moulishwaran-321841248_oasis-infobyte-internship-in-data-science-activity-7128032704155041792-7sIa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1ZLIkB5Rdt3glezVP1JsCd_YaH3ZhbeVE",
      image: "https://raw.githubusercontent.com/MurthyMoulishwaran/moulishwaran-portfolio/main/src/assets/oasis.png",
      details: [
        "Iris Classification: Achieved 98% accuracy in classifying Iris species with Logistic Regression and EDA.",
        "Spam Detection: Built an NLP model with 96% accuracy for spam classification using TF-IDF and Logistic Regression.",
        "Unemployment Analysis: Analyzed unemployment trends in India, visualized patterns with Seaborn and Plotly."
      ]
    },
    {
      title: "AI-Powered Resume Builder",
      description: "An intelligent resume builder that uses AI to suggest improvements and optimize content.",
      technologies: ["React", "Node.js", "OpenAI API", "Tailwind CSS", "Express"],
      github: "https://github.com/MurthyMoulishwaran/AI-Resume-Builder",
      live: "https://ai-resume-builder-moulishwaran.vercel.app/",
      image: "https://raw.githubusercontent.com/MurthyMoulishwaran/moulishwaran-portfolio/main/src/assets/resume-builder.png",
      details: [
        "Integrated OpenAI API for intelligent content suggestions",
        "Real-time resume preview with professional templates",
        "AI-powered content optimization and improvement suggestions"
      ]
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      github: "https://github.com/MurthyMoulishwaran/E-Commerce-Platform",
      live: "https://e-commerce-platform-moulishwaran.vercel.app/",
      image: "https://raw.githubusercontent.com/MurthyMoulishwaran/moulishwaran-portfolio/main/src/assets/ecommerce.png",
      details: [
        "Secure user authentication and authorization",
        "Shopping cart functionality with Redux state management",
        "Stripe payment integration for secure transactions"
      ]
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      github: "https://github.com/MurthyMoulishwaran/Task-Management-App",
      live: "https://task-management-app-moulishwaran.vercel.app/",
      image: "https://raw.githubusercontent.com/MurthyMoulishwaran/moulishwaran-portfolio/main/src/assets/task-manager.png",
      details: [
        "Real-time task updates using Firebase",
        "User authentication and task sharing",
        "Responsive design with Material-UI components"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors duration-300"
                    >
                      <FaGithub size={24} />
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt size={24} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 