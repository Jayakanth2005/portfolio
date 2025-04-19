import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import ghibli from "../assets/ghibli.png"; 
import resume from '../assets/jayakanth.pdf';
// make sure the image path is correct

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.img
            src={ghibli}
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-500/30 shadow-lg"
            variants={item}
          />

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-blue-400"
            variants={item}
          >
            Hey, I'm <span className="text-white">Jayakanth S</span>
          </motion.h1>

          <motion.h2 className="text-xl md:text-2xl text-gray-400 font-medium" variants={item}>
            <Typewriter
              words={['Developer', 'Backend Engineer', 'Tech Explorer', 'Creative Coder']}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.h2>

          <motion.p className="max-w-2xl mx-auto text-gray-500" variants={item}>
            I build visually appealing, responsive, and dynamic web applications using modern tech stacks like React, Flutter, Node.js, and more.
          </motion.p>

          {/* 💾 Download CV Button */}
          <motion.div variants={item}>
            <a
              href={resume}
              download
              className="inline-block mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow transition duration-300"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center gap-6 pt-4 text-xl"
            variants={item}
          >
            <a href="https://www.linkedin.com/in/jayakanth-sivakumar-434851257/" className="text-gray-400 hover:text-blue-500 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Jayakanth2005" className="text-gray-400 hover:text-blue-500 transition">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/jayakanth__sivakumar/?next=%2F" className="text-gray-400 hover:text-blue-500 transition">
              <FaInstagram />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
