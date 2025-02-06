import { motion } from "framer-motion";
import { TechStack } from "../components";

export const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary">
            About Me
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Passionate about creating impactful web experiences
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I'm based in Davao City, Philippines. I have nearly seven (7) years
            of experience as a Web Developer, specializing in PHP (Laravel,
            Symfony), React.js, Next.js, Typescript and Node.js for backend
            development.
          </p>
        </motion.div>
        <TechStack />
      </div>
    </section>
  );
};
