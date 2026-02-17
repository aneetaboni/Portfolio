import { motion } from 'motion/react';
import { Award, Trophy, Star, Medal, Code2, Database, Smartphone } from 'lucide-react';

const achievementsData = [
  {
    title: "Programming for Everybody (Python)",
    issuer: "Coursera",
    date: "Certification",
    icon: Code2,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Blockchain Technology",
    issuer: "IEEE Workshop",
    date: "Workshop",
    icon: Database,
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "Flutter App Development",
    issuer: "CSI Workshop",
    date: "Workshop",
    icon: Smartphone,
    color: "from-blue-400 to-teal-400"
  },
  {
    title: "Quantum Computing",
    issuer: "Industrus Tech",
    date: "Workshop",
    icon: Star,
    color: "from-indigo-600 to-purple-600"
  },
  {
    title: "Augmented Reality",
    issuer: "RSET",
    date: "Workshop",
    icon: Star,
    color: "from-red-500 to-orange-500"
  },
  {
    title: "TCS National Qualifier Test",
    issuer: "TCS",
    date: "Score: 75.82% (Foundation)",
    icon: Trophy,
    color: "from-green-500 to-emerald-500"
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Continuous learning and recognition of expertise in various technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievementsData.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                className="relative group bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${achievement.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex p-4 bg-gradient-to-br ${achievement.color} rounded-2xl mb-4 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                    {achievement.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-1">{achievement.issuer}</p>
                  <p className="text-slate-500 text-xs">{achievement.date}</p>
                </div>

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${achievement.color} opacity-5 rounded-bl-full`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
