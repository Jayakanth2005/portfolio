import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    year: "2025",
    title: "Software Development Intern",
    company: "Bluestock Fintech",
    location: "Remote",
    date: "Apr 2025 – May 2025",
    points: [
      "Contributed to fintech product and website development.",
      "Collaborated with cross-functional teams.",
    ],
    color: "bg-red-600",
  },
  {
    year: "2025",
    title: "Software Development Intern",
    company: "Zakapps Pvt Ltd",
    location: "Chennai, India",
    date: "Jan 2025 – Feb 2025",
    points: [
      "Built Node.js-based Asset Management System.",
      "Designed RESTful APIs with Express.js.",
    ],
    color: "bg-yellow-400 text-black",
  },
  {
    year: "2024",
    title: "React Native Trainee",
    company: "VBC Developers",
    location: "Remote",
    date: "Jan 2024 – Feb 2024",
    points: [
      "Trained in React & React Native.",
      "Managed team updates and reporting.",
    ],
    color: "bg-blue-600",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-gray-900 text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Career Timeline
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 w-full h-1 bg-gray-600 z-0"></div>

          <div className="flex justify-between relative z-10 flex-wrap gap-y-10">
            {experiences.map((exp, i) => {
              const isAbove = i % 2 === 0;
              return (
                <div key={i} className="w-full sm:w-1/3 flex flex-col items-center relative">
                  {/* Connector line */}
                  <div
                    className={`absolute ${
                      isAbove ? 'bottom-full mb-2' : 'top-full mt-2'
                    } h-10 w-0.5 bg-gray-500`}></div>

                  {/* Icon */}
                  <div className="w-7 h-7 bg-white text-black rounded-full flex items-center justify-center z-10 shadow-md">
                    <FaBriefcase size={14} />
                  </div>

                  {/* Info card */}
                  <motion.div
                    initial={{ opacity: 0, y: isAbove ? -30 : 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className={`rounded-xl p-5 w-64 shadow-md ${
                      exp.color
                    } ${isAbove ? 'mb-6 mt-0' : 'mt-6 mb-0'}`}
                  >
                    <h4 className="text-lg font-bold text-center">{exp.year}</h4>
                    <div className="mt-2 text-sm text-center space-y-1">
                      <p className="font-semibold">{exp.title}</p>
                      <p className="opacity-90">{exp.company} • {exp.location}</p>
                      <p className="text-xs opacity-80">{exp.date}</p>
                      <ul className="mt-2 list-disc list-inside text-xs opacity-95 text-left">
                        {exp.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
