import { motion } from "framer-motion";
import { ContactForm } from "../components";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary">
            Contact
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Let's Work Together
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>
        <ContactForm />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex justify-center space-x-6"
        >
          <a
            href="https://www.linkedin.com/in/johnmelsulla/"
            className="text-gray-600 hover:text-primary transition-colors"
            target="_blank"
          >
            <LinkedinIcon className="h-6 w-6" />
          </a>
          <a
            href="mailto:iamjohnmelsulla@gmail.com"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            <MailIcon className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
