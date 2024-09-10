import { Project } from "../projects_db/db.ts";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageProvider.tsx";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useContext(LanguageContext);

  return (
    <div className="bg-base-300  py-4 flex flex-col gap-2 rounded-xl">
      <p className="text-xl font-semibold">{project.title}</p>
      <img src={project.image} alt="" />
      <div className="flex flex-col justify-between h-full gap-4">
        <p className="px-6 text-justify mt-2">{project.projectInfo.get(language)}</p>
        <div className="flex flex-wrap gap-2 px-3">
          {project.tags.map((tag) => (
            <span key={tag} className="btn btn-outline btn-secondary text-sm font-semibold py-1 px-4 rounded-full pointer-events-none">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-content text-lg font-semibold py-2 mx-4 hover:opacity-80 w-1/2">
            Visit Website
          </a>
          <Link to={`/project/${project.id}`} className="bg-secondary text-secondary-content text-lg font-semibold py-2 mx-4 hover:opacity-80 w-1/2">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
