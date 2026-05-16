import { motion } from "framer-motion";

function Skill() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Python",
    "Django",
    "REST API",
    "Java",
    "MySQL",
    "MongoDB",
    "Git",
    "GitHub",
    "VS Code",
  ];

  return (
    <section id="skills" className="bg-[#0a0a0a] py-28 px-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl text-white text-center mb-16"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 + i * 0.05 }}
              className="bg-white rounded-2xl shadow-md p-6 text-center font-semibold hover:bg-white hover:text-black transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;