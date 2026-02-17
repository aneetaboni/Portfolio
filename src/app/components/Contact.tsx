import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hi,
                I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible!
              </p>

              {/* Social Links */}
              <div className="space-y-4">
                <motion.a
                  href="mailto:aneetaboni19@gmail.com"
                  className="flex items-center gap-4 p-4 bg-slate-700/30 hover:bg-slate-700/50 rounded-2xl transition-all group"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="text-white font-medium">aneetaboni19@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+61489301333"
                  className="flex items-center gap-4 p-4 bg-slate-700/30 hover:bg-slate-700/50 rounded-2xl transition-all group"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <p className="text-white font-medium">+61 489301333</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/aneetaboni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-slate-700/30 hover:bg-slate-700/50 rounded-2xl transition-all group"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl group-hover:shadow-lg group-hover:shadow-blue-600/50 transition-all">
                    <Linkedin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">LinkedIn</p>
                    <p className="text-white font-medium">linkedin.com/in/aneetaboni</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://github.com/aneetaboni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-slate-700/30 hover:bg-slate-700/50 rounded-2xl transition-all group"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl group-hover:shadow-lg group-hover:shadow-slate-700/50 transition-all">
                    <Github className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">GitHub</p>
                    <p className="text-white font-medium">github.com/aneetaboni</p>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 rounded-xl focus:border-blue-500 focus:ring-blue-500/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 rounded-xl focus:border-blue-500 focus:ring-blue-500/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or just say hi..."
                    rows={5}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 rounded-xl focus:border-blue-500 focus:ring-blue-500/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-500">
            © 2026 Aneeta Boni. Built with React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  );
}
