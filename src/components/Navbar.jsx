import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Glass effect trigger
      if (currentScrollY > 20) setIsScrolled(true);
      else setIsScrolled(false);

      // Hide/Reveal logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
        isVisible ? "translate-y-0" : "-translate-y-full",
        isScrolled ? "glass-elevated" : "bg-transparent"
      )}
    >
      <div className="section-inner flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <motion.a 
          href="#hero" 
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-6 h-6 md:w-7 md:h-7 bg-white rounded-lg flex items-center justify-center overflow-hidden">
            <motion.div 
              className="w-3 h-3 bg-gradient-to-br from-accent-emerald to-accent-purple rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <span className="text-base md:text-lg font-bold tracking-tight text-text group-hover:text-accent-emerald transition-colors">
            Eswar
          </span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-text-secondary hover:text-text transition-colors px-3 py-2"
              whileHover={{ color: '#f5f5f7' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {link.label}
              <motion.span 
                className="absolute -bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-emerald to-accent-purple"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <motion.button
          className="md:hidden p-2 text-text-secondary hover:text-text transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0, 
          height: mobileMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
        className={cn(
          "md:hidden absolute top-full left-0 right-0 glass-base border-t border-white/5 overflow-hidden",
          mobileMenuOpen ? "visible" : "invisible"
        )}
      >
        <div className="section-inner flex flex-col py-4 space-y-2">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-text py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;