import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  
  const tech = ['HTML5', 'CSS', 'JavaScript','React', 'MySQL', 'Python'];

  useEffect(() => {
    const timer = setInterval(() => {
      setText(tech[index]);
      setIndex((index + 1) % tech.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [index]);

  // const downloadResume = () => {
  //   // Method 1: Direct download
  //   const link = document.createElement('a');
  //   link.href = '/resume.pdf'; // Make sure resume.pdf is in public folder
  //   link.download = 'Eswararao_Chittala_Resume.pdf';
  //   link.click();
  // };
  const downloadResume = () => {
  // Replace with your actual Google Drive link
  window.open('https://drive.google.com/file/d/1n2KQivpfQVFOkM2lDOjz-zZ2A2rcEyqc/view?usp=sharing', '_blank');
};

  return (
    <section id="hero" className="min-h-screen flex items-center hero-bg">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-600">Eswararao Chittala</h1>
          <h2 className="text-2xl md:text-2xl mb-6 text-white font-semibold">Aspiring Full-Stack Developer</h2>
          
          <div className="text-lg mb-8 h-8">
            <span className="text-blue-500 font-semibold">I work with: {text}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            
            <button 
              className="btn bg-green-600 text-white hover:bg-green-700 flex items-center justify-center gap-2"
              onClick={downloadResume}
            >
              <Download size={18} />
              Download Resume
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="relative">
            {/* Profile Image Container */}
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <div className="w-60 h-60 md:w-72 md:h-72 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src="/Face.jpg" 
                  alt="Eswararao Chittala" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating Tech Icons */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">🐍</span>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">⚛️</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">💻</span>
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">🚀</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;