import { motion } from 'motion/react';
import {
  Code2,
  Database,
  Cloud,
  Terminal,
  Palette,
  GitBranch,
  Server,
  Smartphone
} from 'lucide-react';

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: Terminal, color: "from-blue-500 to-cyan-500" },
      { name: "C++", icon: Code2, color: "from-blue-600 to-indigo-600" },
      { name: "C", icon: Code2, color: "from-gray-500 to-slate-500" },
      { name: "JavaScript", icon: Code2, color: "from-yellow-500 to-orange-500" },
    ]
  },
  {
    category: "Web Technologies",
    skills: [
      { name: "HTML & CSS", icon: Palette, color: "from-orange-500 to-red-500" },
      { name: "Node.js", icon: Server, color: "from-green-500 to-emerald-600" },
      { name: "Express.js", icon: Server, color: "from-gray-500 to-slate-600" },
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "SQL", icon: Database, color: "from-blue-500 to-cyan-600" },
      { name: "MongoDB", icon: Database, color: "from-green-600 to-teal-600" },
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: GitBranch, color: "from-orange-600 to-red-600" },
      { name: "VS Code", icon: Code2, color: "from-blue-600 to-cyan-500" },
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      className="group relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                      {/* Glow effect */}
                      <div className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

                      <div className="relative">
                        <div className={`inline-flex p-3 bg-gradient-to-br ${skill.color} rounded-xl mb-4 shadow-lg`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="text-white font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
