import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Heart } from 'lucide-react';
import profileImg from '../images/annetaboni.jpeg';

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Photo Card */}
          <motion.div
            className="md:col-span-1 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="h-full w-full relative">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
              <img
                src={profileImg}
                alt="Aneeta Boni"
                className="w-full h-full object-cover min-h-[300px]"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-white font-semibold text-lg">Aneeta Boni</p>
                <p className="text-blue-400 text-sm">IT Student</p>
              </div>
            </div>
          </motion.div>

          {/* Bio Card */}
          <motion.div
            className="md:col-span-2 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl">
                <Heart className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              Motivated IT student at Deakin University, Australia, seeking an internship opportunity to apply technical skills in software development, AI, or cloud infrastructure.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Eager to contribute to real-world projects, collaborate in dynamic teams, and grow into a professional software engineer.
            </p>
          </motion.div>

          {/* Education Card */}
          <motion.div
            className="md:col-span-1 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl">
                <GraduationCap className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-white">Master of IT</h4>
                <p className="text-slate-400">Deakin University</p>
                <p className="text-sm text-slate-500">Exp. 2026</p>
              </div>
              <div className="pt-4 border-t border-slate-700">
                <h4 className="text-lg font-medium text-white">B.Tech in IT</h4>
                <p className="text-slate-400">RSET, India</p>
                <p className="text-sm text-slate-500">2023 | GPA: 6.9</p>
              </div>
            </div>
          </motion.div>

          {/* Career Focus Card */}
          <motion.div
            className="md:col-span-2 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-xl border border-blue-700/30 rounded-3xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl">
                <Briefcase className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Career Focus</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium text-blue-300 mb-2">Software Development</h4>
                <p className="text-slate-400 text-sm">
                  Developing robust applications using Python, C++, and JavaScript.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-purple-300 mb-2">Cloud Infrastructure</h4>
                <p className="text-slate-400 text-sm">
                  Managing and deploying varied cloud services and infrastructure.
                </p>
              </div>
              <div className="md:col-span-2">
                <h4 className="text-lg font-medium text-pink-300 mb-2">AI Integration</h4>
                <p className="text-slate-400 text-sm">
                  Leveraging Machine Learning and AI to build smarter solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
