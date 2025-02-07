import { motion } from "framer-motion";
import { ContactForm } from "../components";
import { LinkedinIcon, MailIcon } from "lucide-react";
import Particles from "react-tsparticles";
import { useCallback, useEffect } from "react";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

export const Contact = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Particles engine initialized");
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log("Particles loaded1", container);
    },
    []
  );

  useEffect(() => {
    const cursorEffect = document.createElement('div');
    cursorEffect.classList.add('cursor-effect');
    document.body.appendChild(cursorEffect);

    const handleMouseMove = (e: MouseEvent) => {
      cursorEffect.style.left = `${e.clientX}px`;
      cursorEffect.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(cursorEffect);
    };
  }, []);

  return (
    <section
      id="contact"
      className="relative isolate px-6 pt-14 lg:px-8 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 overflow-hidden"
    >
      <Particles
        className="absolute inset-0 -z-10 h-screen"
        id="tsparticles2"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#6366f1",
            },
            links: {
              color: "#6366f1",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
          fullScreen: {
            enable: false,
          },
        }}
      />
      <div className="mx-auto max-w-7xl px-6 pt-[70px] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary text-white">
            Contact
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            Let's Work Together
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-200">
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
            className="text-gray-200 hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="h-6 w-6" />
          </a>
          <a
            href="mailto:iamjohnmelsulla@gmail.com"
            className="text-gray-200 hover:text-primary transition-colors"
          >
            <MailIcon className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
