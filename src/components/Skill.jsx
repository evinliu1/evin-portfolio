import SkillCard from "./SkillCard";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { imgSrc: "/images/react.svg", label: "React", desc: "UI Framework" },
      { imgSrc: "/images/typescript.svg", label: "TypeScript", desc: "Type-safe JS" },
      { imgSrc: "/images/javascript.svg", label: "JavaScript", desc: "Language" },
      { imgSrc: "/images/tailwindcss.svg", label: "TailwindCSS", desc: "Utility CSS" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { imgSrc: "/images/python.svg", label: "Python", desc: "Scripting & Automation" },
      { imgSrc: "/images/java.svg", label: "Java", desc: "Backend & CLI Tools" },
      { imgSrc: "/images/nodejs.svg", label: "Node.js", desc: "JS Runtime" },
      { imgSrc: "/images/expressjs.svg", label: "Express.js", desc: "Web Framework" },
    ],
  },
  {
    category: "Data & DevOps",
    skills: [
      { imgSrc: "/images/mongodb.svg", label: "MongoDB", desc: "Database" },
      { imgSrc: "/images/githubactions.svg", label: "GitHub Actions", desc: "CI/CD" },
    ],
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <p className="section-label">What I Work With</p>
        <h2 className="headline-2 mb-10">Skills</h2>

        <div className="space-y-10">
          {skillGroups.map(({ category, skills }) => (
            <div key={category}>
              <h3 className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-4">
                {category}
              </h3>
              <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
                {skills.map(({ imgSrc, label, desc }) => (
                  <SkillCard key={label} imgSrc={imgSrc} label={label} desc={desc} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
