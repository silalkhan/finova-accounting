import { whyChooseUs } from "../data/content";

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">WHY FINOVA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Finova Accounting?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We set ourselves apart through expertise, transparency, and
            unwavering commitment to your success
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {whyChooseUs.map((feature, index) => (
            <div
              key={index}
              className="group flex gap-6 p-8 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-blue-100 to-teal-100 group-hover:from-blue-500 group-hover:to-teal-500 transition-all duration-300">
                  <span className="text-2xl group-hover:text-white transition-colors">
                    {feature.icon}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Ready to experience the Finova difference?
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
            Schedule Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
