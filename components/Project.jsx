import { motion } from "framer-motion";

function Project() {
  const projects = [
    "Portfolio Website",
    "Weather App",
    "Personal Expense Tracker",
    "E-Commerce Website",
    "API Monitoring System",
  ];

  return (
    <section id="projects" className="bg-black text-white py-28 px-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-black text-center mb-16"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 + i * 0.1 }}
              className="border border-zinc-700 rounded-3xl p-10 hover:bg-zinc-900 transition"
            >
              <h3 className="text-2xl font-bold mb-4">{project}</h3>
              <p className="text-zinc-400">
                Modern responsive full stack project.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;