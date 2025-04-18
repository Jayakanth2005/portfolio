import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

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

function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 bg-[url('/assets/grid-pattern.svg')] bg-cover bg-center pointer-events-none" />

      {/* Decorative Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 border border-blue-600 rounded-full"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      />

      {/* Main Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl w-full grid md:grid-cols-2 items-center gap-16 z-10"
      >
        {/* Left Content */}
        <motion.div variants={item} className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Hi, I’m <span className="text-blue-500">Jayakanth</span>
          </h1>
          <motion.p variants={item} className="text-lg text-gray-400 max-w-xl">
            I design, develop and solve real-world problems through code. A CSE student & full-stack developer, I've built innovative projects recognized at Smart India Hackathon, PEC Hacks and more.
          </motion.p>

          <motion.div variants={item} className="flex gap-5 mt-4 text-2xl text-gray-300">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaGithub /></a>
          </motion.div>

          <motion.a
            href="/assets/jayakanth_resume.pdf"
            variants={item}
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition font-semibold"
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Right Avatar */}
        <motion.div
          variants={item}
          className="relative flex justify-center items-center"
        >
          <motion.img
            src="/assets/3d-avatar.png"
            alt="3D Avatar of Jayakanth"
            className="w-[350px] h-auto object-contain rounded-xl shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="absolute top-4 right-4 bg-blue-700 px-4 py-2 rounded-full shadow-lg text-sm font-semibold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Developer & Engineer
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
