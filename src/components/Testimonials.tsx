import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of satisfied businesses that trust Finova for their
            accounting needs
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Quote Icon */}
              <div className="text-5xl text-gray-200 mb-4">✨</div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10 text-sm md:text-base">
                "{testimonial.feedback}"
              </p>

              {/* Author Info */}
              <div className="relative z-10 border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.position} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Trusted by leading companies in finance, technology, and healthcare
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {[
              "TechFlow Inc",
              "GrowthVentures",
              "NutriHealth Co",
              "InnovateLabs",
            ].map((company, i) => (
              <div key={i} className="text-gray-400 font-semibold text-sm">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
