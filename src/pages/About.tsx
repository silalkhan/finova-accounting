import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import About from "../components/sections/About";
import Footer from "../components/layout/Footer";

export default function AboutPage() {
  return (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 md:py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Finova Accounting
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Your trusted partner in financial excellence for over 15 years
          </motion.p>
        </div>
      </motion.section>

      {/* Main About Section */}
      <About />

      {/* Our Team Preview */}
      <motion.section
        className="py-20 md:py-32 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced professionals are dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Margaret Johnson",
                role: "CEO & Founder",
                expertise: "20+ years in accounting",
              },
              {
                name: "David Chen",
                role: "Chief Financial Officer",
                expertise: "CPA, expertise in tax planning",
              },
              {
                name: "Sarah Williams",
                role: "Lead Accountant",
                expertise: "Specialist in financial reporting",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 text-center font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-center">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="py-20 md:py-32 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: "🎯",
                title: "Excellence",
                desc: "Best-in-class service",
              },
              {
                icon: "🤝",
                title: "Integrity",
                desc: "Transparent and honest",
              },
              {
                icon: "💡",
                title: "Innovation",
                desc: "Cutting-edge solutions",
              },
              {
                icon: "❤️",
                title: "Trust",
                desc: "Your success is ours",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </motion.div>
  );
}
