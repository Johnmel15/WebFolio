import { motion } from "framer-motion";

interface ExperienceCardProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  tasks: string[];
  techStack: string[];
}

export const ExperienceCard = ({
  company,
  position,
  startDate,
  endDate,
  tasks,
  techStack,
}: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{position}</h3>
          <p className="text-lg text-primary">{company}</p>
        </div>
        <div className="text-sm text-gray-500 mt-2 sm:mt-0">
          {startDate} - {endDate || "Present"}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">
          Key Responsibilities:
        </h4>
        <ul className="space-y-1">
          {tasks.map((task, index) => (
            <li key={index} className="flex text-gray-600 text-sm">
              <span className="mr-2">•</span>
              <span className="whitespace-pre-line">{task}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">
          Technologies Used:
        </h4>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-[#12294f] text-gray-100 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
