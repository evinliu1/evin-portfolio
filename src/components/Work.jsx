import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-1.jpg",
    title: "Scriptly",
    subtitle: "AI Script Generator for TikTok",
    description:
      "SaaS platform that reads TikTok analytics and writes scripts tailored to each creator's audience. Integrates 22+ trending data feeds, voice-matching from past scripts, and one-tap refinement — generating 1M+ video impressions for users.",
    tags: ["React", "Node.js", "AI/ML", "Stripe"],
    projectLink: "https://scriptly.work",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <p className="section-label">Portfolio</p>
        <h2 className="headline-2 mb-3">Selected Work</h2>
        <p className="text-zinc-400 mb-10 max-w-[52ch]">
          AI-powered TikTok script generator built for creators who want real results.
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
