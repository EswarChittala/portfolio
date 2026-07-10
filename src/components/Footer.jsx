import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/EswarChittala',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/eswarchittala',
      icon: Linkedin,
    },
    {
      name: 'Email',
      url: 'mailto:eswarchittala13@gmail.com',
      icon: Mail,
    },
  ];

  return (
    <footer className="relative py-16 md:py-20 border-t border-white/5">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* CTA Section */}
          <div className="glass-base rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-text mb-4">
              Let's Work Together
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto mb-8">
              Have a project or opportunity? I'd love to hear from you.
            </p>
            <motion.a
              href="mailto:eswarchittala13@gmail.com"
              className="btn-primary-base bg-white text-black font-semibold inline-flex"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
              <ArrowUpRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          {/* Footer Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Copyright & Info */}
            <div className="space-y-2">
              <p className="text-text-secondary">
                © {year} Eswara Rao Chittala. All rights reserved.
              </p>
              <p className="text-text-muted text-sm">
                Designed & Built with <span className="text-accent-emerald">passion</span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-start md:justify-end gap-4">
              {socialLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={i}
                    href={link.url}
                    target={link.url.startsWith('mailto') ? undefined : '_blank'}
                    rel="noreferrer"
                    className="relative p-3 rounded-full glass-base border border-white/10 group hover:border-white/20 hover:bg-white/5"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={link.name}
                  >
                    <Icon size={20} className="text-text-secondary group-hover:text-accent-emerald transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Scroll to Top */}
          <div className="text-center pt-8 border-t border-white/5">
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-text-secondary hover:text-text transition-colors inline-flex items-center gap-2"
              whileHover={{ y: -2 }}
            >
              Back to Top
              <ArrowUpRight size={16} className="rotate-45" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;