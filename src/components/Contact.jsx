import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, FileText } from 'lucide-react';

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

  return (
    <section id="contact" className="section bg-section-alt">
      <div className="container max-w-4xl">
        <div className="section-heading">
          <h2>Contact</h2>
          <p>Let's connect — open to opportunities, collaborations, and conversations.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail size={18} className="text-slate-500" />
                <a href="mailto:eswarchittala13@gmail.com" className="hover:text-blue-400">eswarchittala13@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone size={18} className="text-slate-500" />
                <a href="tel:+919603841926" className="hover:text-blue-400">+91 9603841926</a>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin size={18} className="text-slate-500" />
                <span>Vijayawada, Andhra Pradesh</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://linkedin.com/in/eswarchittala" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/EswarChittala" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400">
                <Github size={20} />
              </a>
              <a href="https://drive.google.com/file/d/1uzev4qSczuC2ybO1xzD_0auhgihJhXWk/view?usp=drive_link" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400">
                <FileText size={20} />
              </a>
            </div>

            <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-emerald-500 text-sm font-medium">Open to Opportunities</span>
              </div>
              <p className="text-slate-400 text-xs">
                Available for freelance projects, full-time roles, and collaborations.
              </p>
            </div>
          </div>

          <div>
            {status === 'success' && (
              <div className="mb-4 p-3 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                Message sent successfully!
              </div>
            )}
            {status === 'error' && (
              <div className="mb-4 p-3 rounded bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm">
                Something went wrong. Please email directly.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full px-4 py-2.5 rounded bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-2.5 rounded bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                required
                className="w-full px-4 py-2.5 rounded bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
              <button type="submit" className="btn btn-primary w-full sm:w-auto">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;