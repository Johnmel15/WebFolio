import { motion } from 'framer-motion';
import { ProjectCard } from '../components';

const projects = [
  // {
  //   title: 'CarCloud Business',
  //   description: 'An enhanced version of the CarCloud Retail App, designed for business use. It enables companies to manage and track their entire vehicle inventory in one centralized platform.',
  //   technologies: ['React.js', 'Typescript', 'Node.js', 'MySQL', 'Tailwind CSS', 'Go Lang'],
  //   imageUrl: './projects/carcloud-retails.png',
  //   liveUrl: 'https://my.carcloudcommunity.co.uk/',
  // },
  {
    title: 'CarCloud Retail',
    description: 'A UK-based web app that has also a mobile version where you can manage your cars, from your car information up to the insurances, next road tax expiration and finances all in one place.',
    technologies: ['React.js', 'Typescript', 'Node.js', 'MySQL', 'Tailwind CSS', 'Go Lang'],
    imageUrl: './projects/carcloud-retails.png',
    liveUrl: 'https://my.carcloudcommunity.co.uk/',
  },
  {
    title: 'MyShed Admin',
    description: 'A dashboard for caters the business operations of MyShed, including Order, Inventory, Leads, Users, Reports, Analytics, Settings and Utilities, Shed Style, Models, Stores and Catalogues.',
    technologies: ['React.js', 'Typescript', 'Node.js', 'MySQL', 'Chakra UI', 'Tailwind CSS'],
    imageUrl: './projects/myshed-admin.png',
    liveUrl: 'https://admin-dev.gitsafe.org/',
  },
  {
    title: 'MyShed 3D Builder App',
    description: 'A web-based application that allows customers to design and build their own shed base on the preset set by the shed company where the customer can order, pay and deliver the shed to their address.',
    technologies: ['React.js', 'Node.js', 'MySQL', 'Chakra UI', 'Stripe', 'PDF Tron'],
    imageUrl: './projects/myshed3d-builder.png',
    liveUrl: 'https://dev.myshed3d.com/',
  },
  {
    title: 'rSchoolToday Event Worker',
    description: 'A web-based app that is integrated with Activity Scheduling System that manages workers info, schedules and jobs assigned to them. They can also manage who can work on a specific school event base on that event needs (Eg. Referee, Linesman, Timekeeper, etc.)',
    technologies: ['PHP', 'Symfony', 'MySQL', 'MongoDB', 'Twig', 'Javascript', 'jQuery', 'RESTfull API', 'CSS', 'Curl'],
    imageUrl: './projects/rschool-logo.png',
    liveUrl: 'https://ew-test.rschooltoday.com/login',
  },
  {
    title: 'rSchoolToday Inventory Management (IM)',
    description: 'A web-based app that manages the inventory of the school and the items that are being used in the school which is also integrated with the Facility Scheduling System.',
    technologies: ['PHP', 'Zend', 'MySQL', 'MongoDB', 'HTML', 'Javascript', 'jQuery', 'RESTfull API', 'CSS', 'Curl'],
    imageUrl: './projects/rschool-logo.png',
    liveUrl: 'https://im-test.rschooltoday.com/authentication/credential/login/',
  },
  {
    title: 'rSchoolToday Work Order (RWORK)',
    description: 'A web-based app that manages the inventory of the school and the items that are being used in the school which is also integrated with the Facility Scheduling System.',
    technologies: ['PHP', 'Zend', 'MySQL', 'MongoDB', 'HTML', 'Javascript', 'jQuery', 'RESTfull API', 'CSS', 'Curl'],
    imageUrl: './projects/rschool-logo.png',
    liveUrl: 'https://rwork-test.rschooltoday.com/authentication/credential/login/',
  },
  {
    title: 'Seg HIS (Segworks Hospital Information System)',
    description: 'A web-based app that manages the hospital operations, including the management of the hospital staff, patients, and the hospital facilities.',
    technologies: ['PHP', 'Smarty', 'MySQL', 'MongoDB', 'HTML', 'Javascript', 'jQuery', 'RESTfull API', 'CSS', 'Curl', 'Yii'],
    imageUrl: './projects/segworks.png',
    liveUrl: '',
  },
  {
    title: 'Electronic Hospital Record (EHR)',
    description: 'A web-based app that manages the patients records, laboratory results, diagnosis and treatment plans and it is integrated with the Seg HIS.',
    technologies: ['PHP', 'Yii', 'MySQL', 'MongoDB', 'HTML', 'Javascript', 'jQuery', 'RESTfull API', 'CSS', 'Curl'],
    imageUrl: './projects/segworks.png',
    liveUrl: '',
  },
  {
    title: 'E-Claims',
    description: 'A web-based app that integrate with the SegHIS app which caters the process of getting claims online for PHILHEALTH (Health Care Provider in the Philippines).',
    technologies: ['PHP', 'Yii', 'MySQL', 'MongoDB', 'HTML', 'Javascript', 'jQuery', 'RESTfull API', 'CSS', 'Curl'],
    imageUrl: './projects/segworks.png',
    liveUrl: '',
  },
  {
    title: 'SureClaims',
    description: 'A standalone version of E-Claims app which is upgraded to support hospital that are not using SegHIS to cater the PHILHEALTH claims of their patients.',
    technologies: ['PHP', 'Vue.js', 'MySQL', 'MongoDB', 'HTML', 'CSS', 'GraphQL'],
    imageUrl: './projects/segworks.png',
    liveUrl: '',
  },
  {
    title: 'Event Booking Pro',
    description: 'A web-based app that gives streamline process of booking events and managing the event details, you set addons base on what the company have offer.',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'HTML', 'CSS', 'RESTfull API'],
    imageUrl: './projects/event-booking-pro.png',
    liveUrl: '',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary">Portfolio</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Projects
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
