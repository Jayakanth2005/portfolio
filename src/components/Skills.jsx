import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiPython, SiHtml5, SiCss3, SiJavascript,
  SiFlutter, SiNodedotjs, SiMysql, SiPostgresql,
  SiFlask, SiReact, SiGit, SiGithub, SiPostman,
  SiFirebase, SiFigma,
} from 'react-icons/si';

const JavaIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    alt="Java"
    className="w-6 h-6 object-contain"
  />
);

const skills = [
  { name: 'Python', icon: SiPython, color: '#3776AB', level: 5 },
  { name: 'Java', icon: JavaIcon, color: '#007396', level: 3 },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26', level: 5 },
  { name: 'CSS', icon: SiCss3, color: '#1572B6', level: 4 },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 4 },
  { name: 'Flutter', icon: SiFlutter, color: '#02569B', level: 3 },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 4 },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 4 },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', level: 3 },
  { name: 'Flask', icon: SiFlask, color: '#339933', level: 3 },
  { name: 'React', icon: SiReact, color: '#61DAFB', level: 3 },
];

const tools = [
  { name: 'Git', icon: SiGit, color: '#F1502F' },
  { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  {
    name: 'FlutterFlow',
    icon: () => (
      <img
        src="https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png"
        alt="FlutterFlow"
        className="w-6 h-6 object-contain"
      />
    ),
    color: '#ffffff',
  },
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  const handleClick = (name) => {
    setActiveSkill((prev) => (prev === name ? null : name));
  };

  const handleMouseLeave = () => {
    setActiveSkill(null);
  };

  const Card = ({ item, showLevel = false }) => {
    const Icon = item.icon;
    return (
      <motion.div
        key={item.name}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        onClick={showLevel ? () => handleClick(item.name) : null}
        onMouseLeave={showLevel ? handleMouseLeave : null}
        className="group flex flex-col items-center bg-white/5 border border-white/10 hover:border-blue-500/40 text-white rounded-xl p-4 shadow-md hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer"
      >
        <div className="flex items-center space-x-2">
          <Icon className="w-6 h-6" style={{ color: item.color }} />
          <span className="text-sm font-medium">{item.name}</span>
        </div>

        {showLevel && activeSkill === item.name && (
          <div className="flex space-x-1 mt-3">
            {[1, 2, 3, 4, 5].map((dot) => (
              <span
                key={dot}
                className={`w-2 h-2 rounded-full ${
                  dot <= item.level
                    ? 'bg-green-400 shadow-md'
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        )}

        <div className="absolute inset-0 rounded-xl border border-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"></div>
      </motion.div>
    );
  };

  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white py-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
            Skills & Technologies
          </h2>
          <p className="text-gray-400">Click a skill to see your proficiency</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {skills.map((skill, index) => (
            <Card key={index} item={skill} showLevel />
          ))}
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <h3 className="text-2xl font-semibold mb-1 text-purple-300">Tools & Platforms</h3>
          <p className="text-gray-500">Technologies I’ve used in development</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <Card key={index} item={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
