import { motion } from "framer-motion";
import javaImg from "../assets/java.jpg";
import flutterImg from "../assets/flutter.jpg";
import codsoftImg from "../assets/coddsoft.jpg";

const certifications = [
  {
    title: "JAVA",
    issuer: "Guvi",
    date: "2023",
    image: javaImg
  },
  {
    title: "Flutter",
    issuer: "Udemy",
    date: "2023",
    image: flutterImg
  },
  {
    title: "Web Development",
    issuer: "Codsoft",
    date: "2025",
    image: codsoftImg
  }
];

function Certifications() {
  return (
    <section id="certifications" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-3 text-purple-400">
            Certifications
          </h2>
          <p className="text-gray-400">Certifications showcasing my technical learning journey</p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 hover:border-purple-500/40 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300"
            >
              <div className="aspect-video relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {cert.title}
                </h3>
                <p className="text-purple-300 text-sm">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
