import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import sihImg from "../assets/sih.jpg";
import pecImg from "../assets/pec.jpg";
import hackfestImg from "../assets/fest.jpg";
import bangaloreImg from "../assets/bang.jpg";

const accomplishments = [
  {
    title: "SIH 2024 Finalist",
    description: "Finalist under ISRO problem statement. Specialized in 3D visualization & backend.",
    year: "2024",
    image: sihImg
  },
  {
    title: "PEC Hacks 2.0 Runner-up",
    description: "Secured 2nd place in MLH-backed national-level hackathon.",
    year: "2024",
    image: pecImg
  },
  {
    title: "Hackfest 2024 Finalist",
    description: "Ranked top 4 out of 2500 teams in SAP Hackathon.",
    year: "2024",
    image: hackfestImg
  },
  {
    title: "Hack Bangalore Participant",
    description: "Participated in Microsoft-backed international hackathon.",
    year: "2024",
    image: bangaloreImg
  }
];

function TiltCard({ acc, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0.5); // Default center
  const y = useMotionValue(0.5);

  // Increase rotation range for more visibility
  const rotateX = useTransform(y, [0, 1], [15, -15]);
  const rotateY = useTransform(x, [0, 1], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const xVal = (e.clientX - rect.left) / rect.width;
    const yVal = (e.clientY - rect.top) / rect.height;
    x.set(xVal);
    y.set(yVal);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      key={index}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.04 }} // Add slight zoom
      className="snap-center flex-shrink-0 w-[280px] md:w-[300px] bg-white/5 border border-white/10 hover:border-purple-500/40 rounded-2xl overflow-hidden backdrop-blur-sm shadow-lg transition-all duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
    >
      <div className="p-5">
        <div className="text-sm text-purple-300 font-semibold mb-1">{acc.year}</div>
        <h3 className="text-lg font-bold mb-1 text-white">{acc.title}</h3>
        <p className="text-sm text-gray-300 mb-4">{acc.description}</p>
      </div>
      <div className="w-full">
        <img
          src={acc.image}
          alt={acc.title}
          className="w-full h-40 object-cover"
        />
      </div>
    </motion.div>
  );
}

function Accomplishments() {
  return (
    <section id="accomplishments" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-3 text-purple-400">
            Accomplishments
          </h2>
          <p className="text-gray-400">Recognitions and milestones</p>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto px-1 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {accomplishments.map((acc, index) => (
            <TiltCard acc={acc} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Accomplishments;
