import { motion } from 'framer-motion';
import { ExperienceCard } from '../components/ExperienceCard';

const experiences = [
  {
    company: 'Tech Company A',
    position: 'Senior Full Stack Developer',
    startDate: 'Jan 2023',
    endDate: 'Present',
    tasks: [
      'Led the development of a high-performance e-commerce platform serving 100k+ daily users',
      'Implemented real-time inventory management system using WebSocket',
      'Mentored junior developers and conducted code reviews',
      'Optimized database queries resulting in 40% faster page load times',
    ],
    techStack: [
      'React',
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'Docker',
      'AWS',
    ],
  },
  {
    company: 'Tech Startup B',
    position: 'Full Stack Developer',
    startDate: 'Mar 2021',
    endDate: 'Dec 2022',
    tasks: [
      'Developed and maintained multiple client-facing web applications',
      'Implemented CI/CD pipelines using GitHub Actions',
      'Created RESTful APIs and microservices',
      'Integrated third-party services and payment gateways',
    ],
    techStack: [
      'React',
      'Express.js',
      'MongoDB',
      'GraphQL',
      'Tailwind CSS',
      'Jest',
      'Stripe',
    ],
  },
  {
    company: 'Digital Agency C',
    position: 'Frontend Developer',
    startDate: 'Jun 2019',
    endDate: 'Feb 2021',
    tasks: [
      'Built responsive and accessible web interfaces',
      'Collaborated with designers to implement pixel-perfect designs',
      'Improved website performance and SEO metrics',
      'Developed reusable component libraries',
    ],
    techStack: [
      'React',
      'Vue.js',
      'SASS',
      'JavaScript',
      'Webpack',
      'Git',
      'Figma',
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
          <h2 className="text-base font-semibold leading-7 text-primary">Experience</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Professional Journey
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A track record of delivering impactful solutions and driving innovation across different organizations.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl gap-8 lg:mx-0 lg:max-w-none">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              {...experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
