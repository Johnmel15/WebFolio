import { motion } from "framer-motion";
import { IconType } from "react-icons/lib";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiChakraui,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiLaravel,
  SiSymfony,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiGit,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiVuedotjs,
  SiStripe,
  SiMariadb,
  SiSwagger,
  SiPostman,
  SiSourcetree,
} from "react-icons/si";

interface TechStackProps {
  category: string;
  items: { name: string; icon: IconType | string; color: string }[];
}

const technologies: TechStackProps[] = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#42b883" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Chakra UI", icon: SiChakraui, color: "#319795" },
      { name: "Javascript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "RESTful APIs", icon: "REST", color: "#339933" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "Symfony", icon: SiSymfony, color: "#000000" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Swagger", icon: SiSwagger, color: "#DC382D" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySql", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MariaDB", icon: SiMariadb, color: "#47A248" },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Github", icon: SiGithub, color: "#181717" },
      { name: "Gitlab", icon: SiGitlab, color: "#FC6D26" },
      { name: "Bitbucket", icon: SiBitbucket, color: "#0052CC" },
      { name: "Stripe", icon: SiStripe, color: "#0052CC" },
      { name: "VSCode", icon: "VS Code", color: "#0052CC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "SourceTree", icon: SiSourcetree, color: "#0052CC" },
    ],
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
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {tech.category}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {tech.items.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                {typeof item.icon === "string" ? (
                  <span style={{ color: item.color }}>{item.icon}</span>
                ) : (
                  <item.icon
                    className="w-8 h-8 mb-2"
                    style={{ color: item.color }}
                  />
                )}
                <span className="text-sm text-gray-600 text-center">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
