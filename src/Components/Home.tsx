import projects from "../projects_db/db";
import ProjectCard from "./ProjectCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100 py-8">
      <p className="text-3xl ">My Portfolio</p>
      <div className="max-w-screen-xl m-auto h-full px-4">
        <section className="py-8">
          <div className="grid grid-cols-3 gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
