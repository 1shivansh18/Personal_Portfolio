import ScrollAnimation from './ScrollAnimation';

const About = () => {
  return (
    <section id="about" className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <ScrollAnimation direction="down">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2 text-center">About Me</h2>
          <p className="text-blue-600 dark:text-blue-400 text-center mb-8">Who I am & What I do</p>
        </ScrollAnimation>
        
        <div className="grid md:grid-cols-2 gap-6">
          <ScrollAnimation direction="left" delay={0.2}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-full transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02] hover:bg-gray-50 dark:hover:bg-gray-700">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I am a passionate Java Full-Stack Developer with expertise in Spring Boot, React, SQL, and MongoDB. I have experience building real-time web applications, RESTful APIs, and secure authentication systems using Spring Security. My projects include a real-time chat application using WebSockets and a chatbot powered by the Gemini API.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I have also completed a one-month virtual internship at CodSoft as a Java Developer, where I worked on Core Java, JDBC, SQL, and MongoDB. Additionally, I am exploring Docker, DevOps, and system design to expand my technical skills. I am eager to apply my knowledge to real-world projects and continuously improve my expertise.
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation direction="right" delay={0.4}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-full transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02] hover:bg-gray-50 dark:hover:bg-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </span>
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium transition-all duration-200 hover:bg-blue-200 dark:hover:bg-blue-800/40">Java</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium transition-all duration-200 hover:bg-blue-200 dark:hover:bg-blue-800/40">Spring Boot</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium transition-all duration-200 hover:bg-blue-200 dark:hover:bg-blue-800/40">React</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium transition-all duration-200 hover:bg-blue-200 dark:hover:bg-blue-800/40">JavaScript</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium transition-all duration-200 hover:bg-blue-200 dark:hover:bg-blue-800/40">CSS</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium transition-all duration-200 hover:bg-blue-200 dark:hover:bg-blue-800/40">Tailwind</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium transition-all duration-200 hover:bg-blue-200 dark:hover:bg-blue-800/40">SQL</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium transition-all duration-200 hover:bg-blue-200 dark:hover:bg-blue-800/40">MongoDB</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium transition-all duration-200 hover:bg-blue-200 dark:hover:bg-blue-800/40">Docker</span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 mt-5 flex items-center">
                <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </span>
                Education
              </h3>
              <div className="space-y-2">
                <div className="p-2 rounded-md transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700/50">
                  <h4 className="font-medium text-gray-800 dark:text-white text-sm">B.tech in Computer Science</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">Gyan Ganga College Of Technology, 2022-2026</p>
                </div>
                <div className="p-2 rounded-md transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700/50">
                  <h4 className="font-medium text-gray-800 dark:text-white text-sm">Frontend Development Certification</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">Online Course, 2023</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About; 