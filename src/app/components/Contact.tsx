import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useForm, ValidationError } from '@formspree/react';

export function Contact() {
  const [state, handleSubmit] = useForm("mpqjlqyv");

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
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

          {/* LEFT SIDE (unchanged contact info) */}
          {/* Keep your entire left card exactly as before */}
          
          {/* RIGHT SIDE – FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Send a Message
              </h3>

              {/* SUCCESS MESSAGE */}
              {state.succeeded ? (
                <p className="text-green-400 text-center py-8">
                  🎉 Thanks! Your message has been sent successfully.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* NAME */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 rounded-xl focus:border-blue-500 focus:ring-blue-500/20"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 rounded-xl focus:border-blue-500 focus:ring-blue-500/20"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or just say hi..."
                      rows={5}
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 rounded-xl focus:border-blue-500 focus:ring-blue-500/20 resize-none"
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  {/* BUTTON */}
                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {state.submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
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
