import { motion } from 'framer-motion';

const accomplishments = [
  {
    title: "Smart India Hackathon Finalist",
    description: "Developed an innovative solution for e-waste management",
    year: "2023"
  },
  {
    title: "PEC Hacks Winner",
    description: "First place in college-level hackathon",
    year: "2023"
  }
];

function Accomplishments() {
  return (
    <section id="accomplishments" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Accomplishments</h2>
          <p className="text-gray-600">Recognition and achievements in competitions</p>
        </motion.div>

        <div className="space-y-6">
          {accomplishments.map((accomplishment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">{accomplishment.year}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 gradient-text">{accomplishment.title}</h3>
                  <p className="text-gray-600">{accomplishment.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Accomplishments;