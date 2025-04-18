import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "E-Waste Facility Locator",
    description:
      "Mobile app to locate nearby e-waste recycling facilities. Featured at an international conference at Mahsa University.",
    techStack: ["Flutter", "Firebase", "Google Maps API"],
    github: "https://github.com/Jayakanth2005/e-waste-locator"
  },
  {
    title: "Renewify",
    description:
      "Guides Indian households in adopting solar panels and biogas digesters. Built using Flutter.",
    techStack: ["Flutter","Three.js","IOT","Django"],
    github: "#"
  },
  {
    title: "Right Space",
    description:
      "Platform to connect freelancers with potential clients. Built recommendation system using Python.",
    techStack: ["Python","FlutterFlow","Firebase"],
    github: "#"
  },
  {
    title: "Hydrosense",
    description:
      "Non-revenue water management tool integrated with IoT for tracking and error logging.",
    techStack: ["IoT", "Web","Google Maps API"],
    github: "#"
  },
  {
    title: "Aerial Inspect",
    description:
      "Satellite data driven 3D city modeler. Simulates solar panel placement using Three.js and pvlib.",
    techStack: ["Three.js", "pvlib","Web","Postgresql"],
    github: "#"
  },
  
  {
    title: "Asset Management System",
    description:
      "Web platform to manage asset records, check in and out, and Asset History.",
    techStack: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/Jayakanth2005/student-management"
  }
];

const cardVariants = {
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      type: 'spring',
      stiffness: 300
    }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
            Projects
          </h2>
          <p className="text-gray-400">A showcase of my recent work and innovations</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover="hover"
              variants={cardVariants}
              className="group relative rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/40 shadow-lg backdrop-blur-sm p-6 transition-all duration-300"
            >
              <div className="absolute top-4 right-4 z-10">
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
              </div>
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm flex-grow line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1 bg-purple-800/20 text-purple-300 rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl border border-purple-500/20 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
