import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "jai06032005@gmail.com",
    link: "mailto:jai06032005@gmail.com",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91 6379793645",
    link: "tel:+916379793645",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "Jayakanth Sivakumar",
    link: "https://www.linkedin.com/in/jayakanth-sivakumar-434851257/",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "Jayakanth2005",
    link: "https://github.com/Jayakanth2005",
  },
];

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Jayakanth",
          from_email: form.email,
          to_email: "jai06032005@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="flex flex-col gap-10 bg-gray-900 text-white p-8 rounded-2xl border border-[#1a1a1a] min-h-screen overflow-x-hidden">
      {/* Main Content */}
      <div className="flex flex-col xl:flex-row gap-10 h-full">
        {/* Left Form */}
        <div className="flex-[0.75] flex flex-col gap-12">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="bg-[#1e1e1e] p-8 rounded-2xl shadow-lg h-full"
          >
            <p className={`${styles.sectionSubText} text-gray-400`}>Get in touch</p>
            <h3 className={`${styles.sectionHeadText} text-white`}>Contact.</h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-6"
            >
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className="bg-[#2b2b2b] py-3 px-5 text-white placeholder:text-gray-400 rounded-lg outline-none border-none focus:ring-2 focus:ring-blue-600"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="bg-[#2b2b2b] py-3 px-5 text-white placeholder:text-gray-400 rounded-lg outline-none border-none focus:ring-2 focus:ring-blue-600"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2">Your Message</span>
                <textarea
                  rows="6"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="bg-[#2b2b2b] py-3 px-5 text-white placeholder:text-gray-400 rounded-lg outline-none border-none focus:ring-2 focus:ring-blue-600"
                />
              </label>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 py-3 px-8 rounded-xl w-fit text-white font-bold shadow-md"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Right - Earth */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[500px] h-[300px] flex-1 overflow-hidden"
        >
          <EarthCanvas />
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center items-center gap-10 mt-10 border-t border-gray-700 pt-6"
      >
        {contactInfo.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300"
          >
            <contact.icon className="text-xl" />
            <span className="text-sm sm:text-base font-medium">{contact.label}</span>
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
