import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import About from "../components/sections/About";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Stats from "../components/sections/Stats";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </motion.div>
  );
}
