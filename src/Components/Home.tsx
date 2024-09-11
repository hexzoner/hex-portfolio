import projects from "../projects_db/db";
import ProjectCard from "./ProjectCard";
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageProvider.tsx";

export default function Home() {
  const { language } = useContext(LanguageContext);

  const title: Map<string, string> = new Map([
    ["EN", "My Portfolio"],
    ["DE", "Mein Portfolio"],
  ]);

  return (
    <div className="min-h-screen bg-base-100 py-8">
      <p className="text-3xl font-semibold">{title.get(language)}</p>
      <div className="max-w-screen-xl m-auto h-full px-4">
        <section className="py-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
