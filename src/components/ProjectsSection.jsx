import { ArrowRight, CheckLineIcon, ExternalLinkIcon, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Hyperealist",
    description: "Unique Landing page app for brands using react and node.js",
    image: "projects/project1.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoURL: "#",
    githubURL: "#",
  },
  {
    id: 2,
    title: "Sable",
    description: "A beutifull Banking website with a slick design",
    image: "projects/project2.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoURL: "#",
    githubURL: "#",
  },
  {
    id: 3,
    title: "Certo",
    description: "A landing page to privacy  android application",
    image: "projects/project1.png",
    tags: ["React", "Node.js", "Express", "Postgress"],
    demoURL: "#",
    githubURL: "#",
  },
  {
    id: 4,
    title: "Capitive",
    description:
      "A webiner platform designed for marketers",
    image: "projects/project4.png",
    tags: ["React", "TailWindCSS", "Node.js", "Express", "MongoDB"],
    demoURL: "#",
    githubURL: "#",
  },
  {
    id: 5,
    title: "PostPilot",
    description: "Unique Webapp to send, ship and track your products",
    image: "projects/project5.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoURL: "#",
    githubURL: "#",
  },
    {
    id: 6,
    title: "Jadoo",
    description: "A tourapp that u can go and check locations worldwide",
    image: "projects/project6.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoURL: "#",
    githubURL: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects. Each project was carefully crafted with
          atention to details, performance and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                  ))}
                </div>

              <div className="text-xl font-semibond mb-1">{project.title}</div>
              <p className="text-mutd-foreground mb-4 text-sm">{project.description}</p>

              <div className="flex justify-between items-center">
                <div className="flex space-x-3 ">
                  <a href={project.demoURL} className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  target="_blank">
                    <ExternalLinkIcon />
                  </a>
                  <a href={project.githubURL} className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  target="_blank">
                    <Github/>
                  </a>
                </div>
              </div>
              </div>

            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://github.com/Omar-Aldabbas"  target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
            Check My Github <ArrowRight size={16} /> 
          </a>
        </div>
      </div>
    </section>
  );
};
