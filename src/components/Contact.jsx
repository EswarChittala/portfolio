import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/mrbygejw', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'eswarchittala13@gmail.com',
      href: 'mailto:eswarchittala13@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9603841926',
      href: 'tel:+919603841926',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Vijayawada, Andhra Pradesh',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header text-center max-w-2xl mx-auto"
        >
          <h2>Get In Touch</h2>
          <p>Let's connect — open to opportunities, collaborations, and conversations.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={i}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors group"
                    whileHover={{ x: 4 }}
                  >
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-accent-emerald group-hover:border-white/20">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-text-muted">{info.label}</p>
                      <p className="text-text font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs uppercase tracking-widest text-text-muted mb-4">Follow</p>
              <div className="flex gap-4">
                {[
                  {
                    name: 'LinkedIn',
                    icon: Linkedin,
                    url: 'https://linkedin.com/in/eswarchittala',
                  },
                  {
                    name: 'GitHub',
                    icon: Github,
                    url: 'https://github.com/EswarChittala',
                  },
                  {
                    name: 'Resume',
                    icon: FileText,
                    url: 'https://drive.google.com/file/d/1uzev4qSczuC2ybO1xzD_0auhgihJhXWk/view?usp=drive_link',
                  },
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-lg bg-white/5 border border-white/10 text-text-secondary hover:text-accent-emerald hover:border-white/20 transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={20} strokeWidth={1.5} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Status Badge */}
            <motion.div
              className="p-4 glass-base rounded-lg border border-white/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex items-center justify-center w-2 h-2">
                  <span className="absolute inline-flex w-2 h-2 rounded-full bg-accent-emerald animate-pulse"></span>
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-accent-emerald"></span>
                </span>
                <span className="text-accent-emerald text-sm font-semibold">Open to Opportunities</span>
              </div>
              <p className="text-text-secondary text-sm">
                Available for freelance projects, full-time roles, and collaborations.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card-premium"
          >
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-4 rounded-lg bg-accent-emerald/10 border border-accent-emerald/30 text-accent-emerald text-sm"
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-4 rounded-lg bg-amber/10 border border-amber/30 text-amber text-sm"
              >
                Something went wrong. Please email directly at eswarchittala13@gmail.com.
              </motion.div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text placeholder-text-muted text-sm focus:outline-none focus:border-white/20 focus:bg-white/10 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text placeholder-text-muted text-sm focus:outline-none focus:border-white/20 focus:bg-white/10 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text placeholder-text-muted text-sm focus:outline-none focus:border-white/20 focus:bg-white/10 transition-colors resize-none"
                />
              </div>
              <motion.button
                type="submit"
                className="btn-primary w-full sm:w-auto font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;