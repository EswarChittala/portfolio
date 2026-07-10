import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-8">
      <div className="container max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-400 text-sm">
          © {year} Eswar Rao Chittala. All rights reserved.
        </div>
        
        <div className="flex gap-4">
          <a href="https://github.com/EswarChittala" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-300">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/eswarchittala" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-300">
            <Linkedin size={18} />
          </a>
          <a href="mailto:eswarchittala13@gmail.com" className="text-slate-500 hover:text-slate-300">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;