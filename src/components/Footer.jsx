import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container text-center">
        <p className="text-gray-300">
          © {currentYear} Eswararao Chittala. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Designed and built with React+Vite & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;