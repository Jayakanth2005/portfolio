import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'jai06032005@gmail.com',
    link: 'mailto:jai06032005@gmail.com'
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+91 6379793645',
    link: 'tel:+916379793645'
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'Jayakanth Sivakumar',
    link: 'https://www.linkedin.com/in/jayakanth-sivakumar-434851257/'
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'Jayakanth2005',
    link: 'https://github.com/Jayakanth2005'
  }
];

function Contact() {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600">Let's connect and discuss opportunities</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center"
            >
              <contact.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-medium text-gray-800 mb-2">{contact.label}</h3>
              <p className="text-gray-600">{contact.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;