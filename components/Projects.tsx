import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
}

function ProjectCard({ title, description, href }: ProjectCardProps) {
  return (
    <div className="border rounded-xl p-6 shadow-sm bg-white hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button asChild>
        <Link href={href}>View Project</Link>
      </Button>
    </div>
  );
}

export default function Projects() {
  const projects: ProjectCardProps[] = [
    {
      title: "Portfolio Website",
      description:
        "A modern personal portfolio built with Next.js and Tailwind CSS.",
      href: "/projects/portfolio",
    },
    {
      title: "Task Manager App",
      description:
        "A full-featured task manager using React, Node.js, and PostgreSQL.",
      href: "/projects/task-manager",
    },
  ];

  return (
    <section className="px-4 py-16 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
