import { motion } from 'framer-motion';
import intelImg from '../assets/intel.png';

function Volunteering() {
  return (
    <section id="volunteering" className="section-padding bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Volunteering</h2>
          <p className="text-gray-400 text-base md:text-lg">Contributing to the community</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          {/* Left Content */}
          <div className="w-full md:w-1/2 p-6 md:p-8 max-w-xl">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Creative Lead – INTELLEXA REC</h3>
            <p className="text-base text-primary mb-3">Technical Club</p>
            <p className="text-sm md:text-base text-gray-300 mb-5 leading-relaxed">
              Led creative initiatives and organized technical events as the Creative Lead of INTELLEXA,
              the technical club at Rajalakshmi Engineering College. Responsible for designing promotional
              materials, managing social media presence, and coordinating technical workshops.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs md:text-sm">
                Leadership
              </span>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs md:text-sm">
                Event Management
              </span>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs md:text-sm">
                Creative Design
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 p-4">
            <img
              src={intelImg}
              alt="INTELLEXA Volunteering"
              className="w-full max-h-[320px] rounded-lg object-cover mx-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Volunteering;
