export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ["About", "Team", "Careers", "Blog"],
    Services: ["Bookkeeping", "Tax Planning", "Payroll", "Audit Support"],
    Resources: ["FAQ", "Documentation", "Support", "Pricing"],
    Legal: ["Privacy Policy", "Terms of Service", "Security", "Compliance"],
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="font-bold text-xl text-white">Finova</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional accounting solutions for businesses of all sizes.
              Your trusted financial partner.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {["LinkedIn", "Twitter", "Facebook"].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-200"
                  title={social}
                >
                  <span className="text-lg">{"🔗".charAt(i % 1)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8 md:my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Finova Accounting. All rights reserved. | Trusted by
            500+ businesses.
          </p>

          {/* Bottom Links */}
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-blue-400 transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-400 transition-colors text-sm"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-400 transition-colors text-sm"
            >
              Security
            </a>
          </div>
        </div>
      </div>

      {/* Top to Top Button */}
      <div className="flex justify-center py-6 border-t border-gray-800">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-gray-400 hover:text-blue-400 transition-colors"
          title="Back to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7-7m0 0l-7 7m7-7v12"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
}
