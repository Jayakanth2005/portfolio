import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "On Duty Management Application",
    description:
      "An On-Duty Management Application helps for applying, approving, and tracking student OD requests. It automates communication between students, faculty, and administration.",
    techStack: ["Django", "React"],
    github: "https://github.com/Kiruthhik/OD_management_system"
  },
  {
    title: "Renewify",
    description:
      "Guides Indian households in adopting solar panels and biogas digesters. Built using Flutter.",
    techStack: ["Flutter", "Three.js", "IOT", "Django"],
    github: "https://github.com/Kiruthhik/Renewify"
  },
  {
    title: "Right Space",
    description:
      "Platform to connect freelancers with potential clients. Built recommendation system using Python.",
    techStack: ["Python", "FlutterFlow", "Firebase"],
    github: "#"
  },
  {
    title: "Hydrosense",
    description:
      "Non-revenue water management tool integrated with IoT for tracking and error logging.",
    techStack: ["IoT", "Web", "Google Maps API"],
    github: "https://github.com/karthi281104/HydroSense"
  },
  {
    title: "Aerial Inspect",
    description:
      "Satellite data driven 3D city modeler. Simulates solar panel placement using Three.js and pvlib.",
    techStack: ["Three.js", "pvlib", "Web", "Postgresql"],
    github: "https://github.com/karthi281104/AerialInspect"
  },
  {
    title: "Asset Management System",
    description:
      "Web platform to manage asset records, check in and out, and Asset History.",
    techStack: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/SSHareesh/Nexus_frontend"
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
    <section id="projects" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-3 text-purple-400">
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
              className="group relative rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/40 backdrop-blur-sm p-6 transition-all duration-300"
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
                      className="text-xs font-medium px-3 py-1 bg-purple-800/20 text-purple-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
