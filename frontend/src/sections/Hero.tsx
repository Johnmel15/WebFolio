import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="home" className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex justify-center mb-8">
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              src="./images/me.png"
              alt="John Melvie Sulla"
              className="w-32 h-32 rounded-full object-cover shadow-lg"
            />
          </div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:font-[500]"
          >
            Hi, I'm John Melvie Sulla
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            Full Stack Developer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Building beautiful and functional web applications with modern
            technologies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <a
              href="#contact"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              View Projects <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
