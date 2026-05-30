import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-slate-800 p-10 rounded-3xl shadow-xl"
        >
          <p className="text-lg text-slate-300 leading-9">
            I am Hanumanthu Swathi, a third-year Information Technology
            student at Aditya College of Engineering & Technology with
            a CGPA of 8.30.
          </p>

          <p className="text-lg text-slate-300 leading-9 mt-6">
            I am passionate about Software Development, Full Stack
            Development, Cloud Computing and AWS. I enjoy building
            real-world applications that solve practical problems and
            improve user experiences.
          </p>

          <p className="text-lg text-slate-300 leading-9 mt-6">
            My goal is to become a Software Developer and Cloud Engineer,
            continuously learning modern technologies and contributing to
            impactful products used by people worldwide.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="bg-slate-700 p-6 rounded-2xl text-center">
              <h3 className="text-cyan-400 text-4xl font-bold">
                8.30
              </h3>
              <p className="mt-2">Current CGPA</p>
            </div>

            <div className="bg-slate-700 p-6 rounded-2xl text-center">
              <h3 className="text-cyan-400 text-4xl font-bold">
                4+
              </h3>
              <p className="mt-2">Major Projects</p>
            </div>

            <div className="bg-slate-700 p-6 rounded-2xl text-center">
              <h3 className="text-cyan-400 text-4xl font-bold">
                AWS
              </h3>
              <p className="mt-2">Cloud Experience</p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;