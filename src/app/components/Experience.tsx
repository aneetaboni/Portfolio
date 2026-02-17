import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

const experienceData = [
  {
    role: "Cloud Infrastructure Service Engineer",
    company: "UST Global",
    duration: "3 months",
    highlights: [
      "Supported cloud infrastructure maintenance and monitoring.",
      "Assisted in deployment and troubleshooting of web applications."
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    role: "Backend Developer Trainee",
    company: "MeetMo.io",
    duration: "9 months",
    highlights: [
      "Developed REST APIs using Python (FastAPI) and MongoDB.",
      "Implemented JWT-based authentication and role-based access.",
      "Contributed to version-controlled development using Git and GitHub."
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    role: "Python Developer Intern",
    company: "Kites Softwares Pvt. Ltd., Kochi",
    duration: "3 months",
    highlights: [
      "Built Python-based modules for internal automation tasks."
    ],
    color: "from-indigo-500 to-purple-500"
  },
  {
    role: "Python & Django Intern",
    company: "Camino Infotech Pvt. Ltd.",
    duration: "15 days",
    highlights: [
      "Gained hands-on experience in developing web applications using Django."
    ],
    color: "from-green-500 to-emerald-500"
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block" />

          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.role}
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-5 top-8 w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-4 border-slate-950 hidden md:block z-10">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-400"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                <motion.div
                  className="md:ml-20 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all group"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 bg-gradient-to-br ${exp.color} bg-opacity-20 rounded-xl`}>
                          <Briefcase className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-2xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                          {exp.role}
                        </h3>
                      </div>
                      <p className="text-lg text-slate-300">{exp.company}</p>
                    </div>
                    <div className={`inline-flex px-4 py-2 bg-gradient-to-r ${exp.color} bg-opacity-10 rounded-full border border-slate-600`}>
                      <span className="text-sm text-slate-300">{exp.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-400">
                        <span className="text-blue-400 mt-1.5">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
