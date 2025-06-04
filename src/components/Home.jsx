import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Home() {
  const roles = [
    "Data Scientist",
    "Machine Learning Engineer",
    "Data Analyst",
    "Full Stack AI Developer",
    "AI Agent Developer",
    "Frontend Developer"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 30);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = currentRoleIndex % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(1000);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex(prevIndex => prevIndex + 1);
      setDelta(200);
    }
  };

  const skills = [
    { name: 'Machine Learning', level: 90 },
    { name: 'Data Analysis', level: 85 },
    { name: 'Deep Learning', level: 88 },
    { name: 'Computer Vision', level: 82 },
    { name: 'Natural Language Processing', level: 80 },
    { name: 'Data Visualization', level: 85 },
    { name: 'Frontend Development', level: 85 }
  ];

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'SQL', 'JavaScript', 'R']
    },
    {
      title: 'Machine Learning',
      skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Keras']
    },
    {
      title: 'Data Visualization',
      skills: ['Tableau', 'Power BI', 'Matplotlib', 'Seaborn']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'AWS', 'PostgreSQL']
    },
    {
      title: 'Frontend Development',
      skills: ['React', 'Tailwind CSS', 'HTML5', 'CSS3']
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-gray-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between min-h-screen py-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 text-center md:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Hi, I'm </span>
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 text-transparent bg-clip-text">
                  Moulishwaran M
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 min-h-[2rem]">
                <span className="text-white">I am a </span>
                <span className="text-purple-400 font-semibold">
                  {text}
                  <span className="animate-blink">|</span>
                </span>
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="#about"
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                >
                  About Me
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 border border-gray-700"
                >
                  Contact
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 mt-12 md:mt-0"
            >
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <img
                  src="/profile.jpg"
                  alt="Moulishwaran M"
                  className="relative w-full h-full object-cover rounded-full border-4 border-purple-500 shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">Professional Journey</h3>
                <p className="text-gray-300 leading-relaxed">
                  I am a passionate Data Scientist with a strong foundation in statistical analysis and machine learning. 
                  My journey in data science began during my Master's program at Periyar University, where I developed 
                  expertise in advanced analytics and predictive modeling.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  With a background in Statistics and hands-on experience in various data science projects, 
                  I specialize in developing machine learning models and data-driven solutions. My work focuses 
                  on creating impactful applications that solve real-world problems.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">Technical Expertise</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-2">Machine Learning & AI</h4>
                    <p className="text-gray-300">
                      Proficient in developing and deploying machine learning models using Python, 
                      with expertise in scikit-learn, TensorFlow, and PyTorch. Experienced in both 
                      supervised and unsupervised learning techniques.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-2">Data Analysis & Visualization</h4>
                    <p className="text-gray-300">
                      Skilled in data manipulation and analysis using pandas, NumPy, and SQL. 
                      Expert in creating insightful visualizations with Matplotlib, Seaborn, and Plotly.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-2">Frontend Development</h4>
                    <p className="text-gray-300">
                      Experienced in building modern, responsive web applications using React and Tailwind CSS. 
                      Skilled in creating interactive user interfaces, implementing animations with Framer Motion, 
                      and ensuring optimal user experience across all devices.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-2">Cloud & Deployment</h4>
                    <p className="text-gray-300">
                      Experience with cloud platforms like AWS and Azure for deploying machine learning models. 
                      Proficient in containerization using Docker and version control with Git.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">Key Projects</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-2">Gold Price Prediction</h4>
                    <p className="text-gray-300">
                      Developed a machine learning model using Random Forest Regression to predict gold prices 
                      with high accuracy. Implemented feature engineering and hyperparameter tuning to optimize 
                      model performance.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-2">Data Analysis Projects</h4>
                    <p className="text-gray-300">
                      Created comprehensive data analysis solutions using Python and SQL, focusing on 
                      extracting meaningful insights from complex datasets. Implemented automated reporting 
                      systems for business intelligence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">Professional Goals</h3>
                <p className="text-gray-300 leading-relaxed">
                  I am passionate about leveraging data science to drive innovation and create value. 
                  My goal is to continue developing cutting-edge solutions that make a real impact in 
                  the field of artificial intelligence and machine learning.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  I am always eager to take on new challenges and collaborate with teams to solve 
                  complex problems. My focus is on creating scalable, efficient, and ethical AI solutions 
                  that benefit society.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-300 flex items-center">
                      <svg className="w-4 h-4 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 