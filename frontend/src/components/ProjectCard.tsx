import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <hr className="mt-2 ml-[10px] mr-[10px]" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-3 flex-1 text-sm text-gray-500">{description}</p>
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-[#12294f] text-gray-100 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
