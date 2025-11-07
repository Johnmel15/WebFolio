import { motion } from "framer-motion";
import { ExperienceCard } from "../components/ExperienceCard";

const experiences = [
  {
    company: "Theia Digital Ltd",
    position: "Mid Frontend Developer",
    startDate: "Mar 2025",
    endDate: "Oct 2025",
    tasks: [
      "Developed and optimized responsive front-end interfaces using React.js, Next.js, and TypeScript for dynamic templating and efficient UI rendering.",
      "Enhanced website performance and ensured seamless responsiveness across various devices and screen sizes.",
      "Collaborated closely with designers and backend developers to deliver impactful UI/UX improvements.",
      "Integrated databases, APIs, and third-party services to expand and refine application functionality.",
      "Identified, troubleshooted, and resolved front-end issues to maintain smooth and consistent user experiences.",
    ],
    techStack: [
      "React",
      "Next.js",
      "Zustand",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
    ],
  },
  {
    company: "Distributed Website Corporation | rSchoolToday | Playons Sports",
    position: "Mid Full Stack Developer",
    startDate: "Jan 2021",
    endDate: "Feb 2025",
    tasks: [
      "Built and optimized frontend interfaces using Twig for dynamic templating and UI rendering.",
      "Led server-side development, ensuring efficient API integrations and database management.",
      "Worked on key applications like Event Worker, rSchooToday Work Order (RWO) and Inventory Management System, enhancing functionality and performance.",
      "Designed scalable and maintainable architecture for both frontend and backend components.",
      "Debugged and optimized applications for better speed, security, and reliability.",
    ],
    techStack: [
      "PHP",
      "JavaScript",
      "jQuery",
      "HTML",
      "CSS",
      "MySQL",
      "Symfony",
      "Zend Framework",
      "Twig",
    ],
  },
  {
    company: "Dataloft LLC",
    position: "Mid Frontend Developer",
    startDate: "Mar 2022",
    endDate: "Nov 2024",
    tasks: [
      "Worked on key applications MyShed Admin, MyShed3d Builder, MyShed Global Console and Shop Inventory enhancing functionality and performance.",
      "Optimize website performance and ensure responsiveness across devices.",
      "Collaborate with designers and backend developers to implement UI/UX improvements.",
      "Work with databases, APIs, and third-party integrations to enhance functionality.",
      "Troubleshoot and debug issues to ensure seamless user experiences.",
    ],
    techStack: [
      "React",
      "Next.js",
      "Tanstack Query",
      "Zustand",
      "Node.js",
      "Express",
      "TypeScript",
      "MySQL",
      "AWS",
      "Swagger",
      "Chakra UI",
      "Tailwind CSS",
      "Stripe",
    ],
  },
  {
    company: "Event Booking Pro",
    position: "Full Stack Developer",
    startDate: "Jun 2020",
    endDate: "Aug 2020",
    tasks: [
      "Built and optimized a web platform that gives streamline for procesing event booking and manages event details. Can add also some equipments and addons base on the company can offer.",
      "Worked closely with a direct client to develop and customize software solutions tailored to their needs.",
      "Integrate payment gateway for payment processing using Stripe and Paypal.",
    ],
    techStack: [
      "PHP",
      "Laravel",
      "Vue.js",
      "Vuex",
      "CSS",
      "MySQL",
      "Stripe",
      "Paypal",
    ],
  },
  {
    company: "Segworks Technologies Corporation",
    position: "Web Developer",
    startDate: "May 2018",
    endDate: "Dec 2020",
    tasks: [
      "Built and optimized healthcare-related applications, including Hospital Information Systems (HIS), E-Claims, Electronic Health Records (EHR), Dietary Apps, and Electronic Medical Records (EMR).",
      "Worked closely with local hospitals in the Philippines to develop and customize software solutions tailored to their needs.",
      "Implemented secure and scalable solutions to handle sensitive patient data and medical workflows.",
      "Enhanced user experience and system efficiency through frontend and backend optimizations.",
      "Collaborated with cross-functional teams to ensure seamless integration and deployment of applications.",
    ],
    techStack: [
      "PHP",
      "JavaScript",
      "jQuery",
      "HTML",
      "CSS",
      "MySQL",
      "Yii",
      "Laravel",
      "React.js",
      "Vue.js",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary">
            Experience
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Professional Journey
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A track record of delivering impactful solutions and driving
            innovation across different organizations.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl gap-8 lg:mx-0 lg:max-w-none">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};
