import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-black py-28 px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center"
      >
      <h2 className="text-5xl text-white mb-10">
        About Me
      </h2>       
       <p className="text-lg text-white leading-9">
          I am Gauri Navgire, a Full Stack Developer passionate about
          building modern, responsive and animated web applications
          using React, Tailwind CSS and powerful frontend and backend technologies.
        </p>
      </motion.div>
    </section>
  );
}

export default About;