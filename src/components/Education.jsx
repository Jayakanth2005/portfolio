import { motion } from 'framer-motion';

const education = [
  {
    institution: "Rajalakshmi Engineering College",
    degree: "B.E. Computer Science and Engineering",
    year: "2022-2026",
    cgpa: "7.90 CGPA"
  },
  {
    institution: "Sethu Bhaskara Matriculation Higher Secondary School",
    degree: "Higher Secondary Certificate (HSC)",
    year: "2022",
    percentage: "95%"
  },
  {
    institution: "Sethu Bhaskara Matriculation Higher Secondary School",
    degree: "Secondary School Leaving Certificate (SSLC)",
    year: "2020",
    percentage: "90%"
  }
];

function Education() {
  return (
    <section id="education" className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            Education
          </h2>
          <p className="text-gray-400">My academic journey and achievements</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-400">{edu.institution}</h3>
              <p className="text-gray-300 mb-2">{edu.degree}</p>
              <p className="text-gray-400 text-sm mb-2">{edu.year}</p>
              <p className="text-white font-medium">
                {edu.cgpa || edu.percentage}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
