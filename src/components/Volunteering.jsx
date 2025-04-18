import { motion } from 'framer-motion';

function Volunteering() {
  return (
    <section id="volunteering" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Volunteering</h2>
          <p className="text-gray-600">Contributing to the community</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl p-8 shadow-md"
        >
          <h3 className="text-2xl font-semibold mb-4 gradient-text">
            Creative Lead – INTELLEXA REC
          </h3>
          <p className="text-lg text-primary mb-4">Technical Club</p>
          <p className="text-gray-600 mb-6">
            Led creative initiatives and organized technical events as the Creative Lead of INTELLEXA,
            the technical club at Rajalakshmi Engineering College. Responsible for designing promotional
            materials, managing social media presence, and coordinating technical workshops.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
              Leadership
            </span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
              Event Management
            </span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
              Creative Design
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Volunteering;