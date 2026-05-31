import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "../../assets/profile.jpg";
import resume from "../../assets/resume.pdf";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 text-xl mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hanumanthu Swathi
          </h1>

          <h2 className="text-2xl md:text-4xl text-slate-300 mb-6">
            Software Developer & Cloud Engineer
          </h2>

          <p className="text-slate-400 text-lg leading-8 mb-8">
            Passionate IT undergraduate skilled in Python, Java,
            AWS, React, JavaScript and Full Stack Development.
            Building scalable and impactful software solutions.
          </p>

          <div className="flex gap-4 flex-wrap">

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition duration-300"
            >
              View Resume
            </a>

            <a
              href={resume}
              download="Hanumanthu_Swathi_Resume.pdf"
              className="border border-cyan-500 hover:bg-cyan-500 px-6 py-3 rounded-xl font-semibold transition duration-300"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-xl font-semibold transition duration-300"
            >
              Contact Me
            </a>

          </div>

          <div className="flex gap-6 mt-8 text-3xl">

            <a
              href="https://github.com/2005swathi2000"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/hanumanthu-swathi-817265291/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://hackerrank.com/hanumanthuswath1"
              target="_blank"
              rel="noreferrer"
            >
              <FaHackerrank />
            </a>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Swathi"
            className="w-[350px] h-[350px] object-cover rounded-full border-4 border-cyan-400 shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;