import { useState } from "react";
import { motion } from "framer-motion";
import { faqs } from "../../data/content";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Common Questions Answered
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to questions about our services, pricing, and support
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className="group border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-all duration-300 bg-white hover:shadow-lg"
            >
              {/* Question Button */}
              <motion.button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
              >
                {/* Question Text */}
                <motion.span
                  className={`font-semibold text-lg transition-colors duration-300 ${
                    openId === faq.id ? "text-blue-600" : "text-gray-900"
                  }`}
                  animate={{
                    color: openId === faq.id ? "#2563eb" : "#111827",
                  }}
                >
                  {faq.question}
                </motion.span>

                {/* Toggle Icon */}
                <motion.div
                  className="flex-shrink-0 ml-4"
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </motion.div>
              </motion.button>

              {/* Answer */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: openId === faq.id ? 1 : 0,
                  height: openId === faq.id ? "auto" : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 md:px-8 py-4 md:py-6 bg-gradient-to-r from-blue-50 to-teal-50 border-t border-gray-200">
                  <motion.p
                    className="text-gray-700 leading-relaxed text-base md:text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: openId === faq.id ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {faq.answer}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12 text-center border border-blue-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6 text-lg">
            Our expert team is here to help. Get in touch with us today.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
