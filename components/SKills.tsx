import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "./ui/badge";

const skills = {
  frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Vue.js", "SASS"],
  backend: ["Node.js", "Express.js", "Python", "Django", "Spring Boot"],
  databases: ["MySQL", "PostgreSQL", "MongoDB"],
  devOps: ["Docker", "CI/CD", "AWS", "Git"],
};

const SkillCard = ({ title, items }: { title: string; items: string[] }) => (
  <Card className="w-full">
    <CardHeader className="text-xl font-semibold">{title}</CardHeader>
    <CardContent className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <Badge key={index} variant="outline" className="text-sm px-3 py-1">
          {item}
        </Badge>
      ))}
    </CardContent>
  </Card>
);

const Skills = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>

      <div className="flex flex-col md:flex-row md:flex-wrap gap-6">
        <div className="md:w-[48%]">
          <SkillCard title="Frontend Development" items={skills.frontend} />
        </div>
        <div className="md:w-[48%]">
          <SkillCard title="Backend Development" items={skills.backend} />
        </div>
        <div className="md:w-[48%]">
          <SkillCard title="Database Management" items={skills.databases} />
        </div>
        <div className="md:w-[48%]">
          <SkillCard title="DevOps & Deployment" items={skills.devOps} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
