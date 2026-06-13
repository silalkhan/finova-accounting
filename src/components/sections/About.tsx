import { motion } from "framer-motion";
import { aboutContent } from "../../data/content";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6"
            >
              <span className="text-sm font-semibold">ABOUT US</span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              {aboutContent.title}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed mb-6"
            >
              {aboutContent.description}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg font-semibold text-blue-600 mb-8"
            >
              {aboutContent.highlight}
            </motion.p>

            {/* Key Points */}
            <motion.div variants={containerVariants} className="space-y-4 mb-8">
              {[
                "Expert team of CPAs and certified accountants",
                "Serving businesses across multiple industries",
                "Commitment to excellence and client satisfaction",
              ].map((point, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">{point}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Learn Our Story
            </motion.button>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl p-8 h-full min-h-96 flex items-end"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="w-full h-80 bg-gradient-to-br from-blue-400 to-teal-400 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <p className="text-6xl mb-4">📊</p>
                  <p className="text-xl font-semibold">
                    Professional Accounting Solutions
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats Card - Floating */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
              whileHover={{ y: -10 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">15+</p>
                <p className="text-gray-600 font-medium">Years of Experience</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
