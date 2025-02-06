import { motion } from "framer-motion";

const technologies = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Chakra UI",
      "Javascript",
      "HTML",
      "CSS",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "RESTful APIs", "PHP (Laravel, Symfony)"],
  },
  {
    category: "Database",
    items: ["MySql", "MongoDB", "Redis"],
  },
  {
    category: "Tools & Others",
    items: ["Git", "Github", "Gitlab", "Bitbucket", "Cursor AI"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const TechStack = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
    >
      {technologies.map((tech) => (
        <motion.div
          key={tech.category}
          variants={item}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {tech.category}
          </h3>
          <ul className="space-y-2">
            {tech.items.map((item) => (
              <li
                key={item}
                className="text-gray-600 flex items-center space-x-2"
              >
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
};
