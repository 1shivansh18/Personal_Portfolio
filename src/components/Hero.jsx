import React, { useEffect, useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white dark:bg-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/src/assets/grid.svg')] bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent dark:from-blue-900/10"></div>
        
        {/* Animated circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400/10 dark:bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400/10 dark:bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/10 dark:via-gray-800/10 to-transparent"></div>
        
        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 py-16 z-10">
        {/* Top Bar with Available Status and Tech Stack */}
        <ScrollAnimation direction="down" delay={0.1}>
          <div className="flex flex-wrap items-center justify-between mb-12">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
              Available for Work
            </span>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <div className="flex -space-x-3">
                {['React', 'Node.js', 'Java', 'Spring'].map((tech, index) => (
                  <div key={tech} className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center border-2 border-white dark:border-gray-900 shadow-sm transform hover:scale-110 transition-transform duration-200" style={{ zIndex: 4 - index }}>
                    <span className="text-blue-600 dark:text-blue-400 text-xs font-medium">{tech.slice(0, 2)}</span>
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Tech Stack</span>
            </div>
          </div>
        </ScrollAnimation>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
                Full Stack Java Developer
                <span className="block text-blue-600 dark:text-blue-400 mt-2">& React Developer</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Using <span className="text-blue-600 dark:text-blue-400">Spring Boot</span> and <span className="text-blue-600 dark:text-blue-400">React</span> to build modern, scalable, and high-performance web applications that deliver exceptional user experiences.
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
                >
                  View Projects
                </button>
                
                <div className="flex items-center gap-4">
                  <a 
                    href="https://github.com/1shivansh18" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 transform"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  {/* <a
                    href="www.linkedin.com/in/shivansh-nema-223b52256" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 transform"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right Column - Profile Image */}
          <ScrollAnimation direction="up" delay={0.4}>
            <div className="relative flex justify-center lg:justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:ml-8">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full opacity-10 blur-3xl animate-pulse delay-700"></div>
                
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-blue-100 dark:border-blue-900/30 bg-gradient-to-b from-transparent to-blue-50 dark:to-blue-900/10 transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="public/shivansh.jpg" 
                    alt="Developer profile" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/300?text=Developer';
                    }}
                  />
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Bottom Stats */}
        <ScrollAnimation direction="up" delay={0.6}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { label: 'Projects Completed', value: '10+' },
              { label: 'Technologies', value: '15+' },
              // { label: 'Years Experience', value: '2+' },
              ,
              { label: 'Certifications', value: '5+' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>

      {/* Scroll indicator */}
      <ScrollAnimation direction="down" delay={0.8}>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1">
            <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce mx-auto"></div>
          </div>
          <span className="mt-2 text-sm text-gray-500 dark:text-gray-400">Scroll</span>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Hero; 