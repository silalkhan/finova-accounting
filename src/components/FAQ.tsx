import { useState } from "react";
import { faqs } from "../data/content";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
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
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="group border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-all duration-300 bg-white hover:shadow-lg"
            >
              {/* Question Button */}
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                {/* Question Text */}
                <span
                  className={`font-semibold text-lg transition-colors duration-300 ${
                    openId === faq.id ? "text-blue-600" : "text-gray-900"
                  }`}
                >
                  {faq.question}
                </span>

                {/* Toggle Icon */}
                <div
                  className={`flex-shrink-0 ml-4 transform transition-transform duration-300 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
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
                </div>
              </button>

              {/* Answer */}
              {openId === faq.id && (
                <div className="px-6 md:px-8 py-4 md:py-6 bg-gradient-to-r from-blue-50 to-teal-50 border-t border-gray-200 animate-in fade-in duration-300">
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12 text-center border border-blue-200">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6 text-lg">
            Our expert team is here to help. Get in touch with us today.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
