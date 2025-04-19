import { motion } from 'framer-motion';

function Papers() {
  return (
    <section id="papers" className="section-padding bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Paper Presentations</h2>
          <p className="text-gray-400">Academic research and publications</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">
            E-Waste Facility Locator App
          </h3>
          <div className="mb-4">
            <p className="text-gray-400 font-medium">Presented at Mahsa University</p>
          </div>
          <p className="text-gray-300 mb-6">
            Research paper on developing a mobile application for locating e-waste recycling facilities,
            promoting sustainable disposal practices and environmental consciousness.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm">
              Mobile Development
            </span>
            <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm">
              Sustainability
            </span>
            <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm">
              Environmental Impact
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Papers;
