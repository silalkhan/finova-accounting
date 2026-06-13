import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: "Services", href: "/services" },
      { label: "Pricing", href: "#pricing" },
      { label: "Security", href: "#security" },
    ],
    Company: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#careers" },
    ],
    Resources: [
      { label: "Documentation", href: "#docs" },
      { label: "FAQ", href: "#faq" },
      { label: "Support", href: "/contact" },
    ],
    Legal: [
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
      { label: "Compliance", href: "#compliance" },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="font-bold text-xl text-white">Finova</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional accounting solutions for businesses. Your trusted
              financial partner since 2010.
            </p>
            <div className="flex gap-4">
              {[
                { icon: "in", title: "LinkedIn" },
                { icon: "tw", title: "Twitter" },
                { icon: "fb", title: "Facebook" },
              ].map((social, i) => (
                <motion.button
                  key={i}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgb(59, 130, 246)",
                  }}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-200"
                  title={social.title}
                >
                  <span className="text-lg">🔗</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div key={category} variants={itemVariants}>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8 md:my-12"></div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={itemVariants}
            className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0"
          >
            © {currentYear} Finova Accounting. All rights reserved.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-6">
            <a
              href="#privacy"
              className="text-gray-500 hover:text-blue-400 transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-gray-500 hover:text-blue-400 transition-colors text-sm"
            >
              Terms
            </a>
            <a
              href="#security"
              className="text-gray-500 hover:text-blue-400 transition-colors text-sm"
            >
              Security
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
