import { motion } from "framer-motion";

function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#dcdcdc]" />

      <div
        className="absolute top-0 right-0 h-full w-[58%] bg-black"
        style={{
          clipPath: "polygon(18% 0%,100% 0%,100% 100%,0% 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-[1500px] mx-auto min-h-screen grid md:grid-cols-2">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center pl-24 pt-24"
        >
          <p className="text-4xl font-medium text-black mb-5">
            Hi, I am
          </p>

          <h1 className="text-[92px] leading-[0.95] font-black tracking-tight text-black">
            Gauri Navgire
          </h1>

          <p className="mt-5 text-2xl text-gray-700 font-medium">
            Full Stack Developer
          </p>

          {/* Icons */}
          <div className="flex gap-5 mt-14">
            {["@", "G", "in"].map((item) => (
              <button
                key={item}
                className="
                w-14 h-14
                bg-white
                rounded
                shadow-md
                font-bold
                transition-all
                duration-300
                hover:bg-black
                hover:text-white
                hover:scale-105
                "
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-end pt-24"
        >
          <img
            src="/profile.jpeg"
            alt="profile"
            className="h-[720px] object-contain object-bottom"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Home;