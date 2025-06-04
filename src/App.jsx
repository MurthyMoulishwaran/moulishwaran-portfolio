import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Moulishwaran M
            </h1>
          </div>
          <div className="flex items-center space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/projects', label: 'Projects' },
              { path: '/resume', label: 'Resume' },
              { path: '/education', label: 'Education' },
              { path: '/contact', label: 'Contact' }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`relative text-lg font-medium transition-colors duration-300 ${
                  location.pathname === path
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {label}
                {location.pathname === path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-white">
        <Navigation />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="w-full bg-gray-900 text-white py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Moulishwaran M</h3>
                <p className="text-gray-400">Data Science Professional</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                  <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
                  <li><Link to="/resume" className="text-gray-400 hover:text-white transition-colors">Resume</Link></li>
                  <li><Link to="/education" className="text-gray-400 hover:text-white transition-colors">Education</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li><a href="mailto:moulishwaran2002@gmail.com" className="text-gray-400 hover:text-white transition-colors">Email</a></li>
                  <li><a href="https://github.com/MurthyMoulishwaran" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">GitHub</a></li>
                  <li><a href="https://www.linkedin.com/in/m-moulishwaran-321841248/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Moulishwaran M. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
