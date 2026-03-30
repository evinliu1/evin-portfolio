import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-1.jpg",
    title: "Crystal Koko",
    subtitle: "Full Stack E-Commerce Platform",
    description:
      "End-to-end e-commerce platform with a React/JavaScript frontend, custom backend API, Stripe checkout, and real-time inventory management built for live-stream crystal sales.",
    tags: ["React", "JavaScript", "Stripe", "Node.js"],
    projectLink: "https://crystalkoko.com",
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "Sub-Tracker",
    subtitle: "Subscription Tracking API",
    description:
      "Secure headless REST API with JWT authentication, full CRUD operations, automated renewal reminders via Upstash, 90%+ test coverage with Vitest, and GitHub Actions CI/CD.",
    tags: ["Node.js", "Express.js", "MongoDB", "Vitest"],
    projectLink: "",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "Modem Rack Dashboard",
    subtitle: "Real-Time Monitoring UI",
    description:
      "React/TypeScript internal dashboard integrating REST APIs to display live modem positions, alarm statuses, and sizing data for field operations teams at CodeMettle.",
    tags: ["React", "TypeScript", "REST API"],
    projectLink: "",
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "MongoDB Backup Automation",
    subtitle: "Zero-Downtime DevOps",
    description:
      "Bash script automating MongoDB cluster backups to a secondary node with health checks and alerting — reducing customer-facing server downtime to 0% across all environments.",
    tags: ["Bash", "MongoDB", "DevOps"],
    projectLink: "",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <p className="section-label">Portfolio</p>
        <h2 className="headline-2 mb-3">Selected Work</h2>
        <p className="text-zinc-400 mb-10 max-w-[52ch]">
          A mix of personal projects and professional work that represents the
          breadth of what I build.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {works.map((work, key) => (
            <ProjectCard key={key} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
