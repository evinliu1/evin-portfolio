const experiences = [
  {
    period: "Jan 2025 — Present",
    title: "Software Development Engineer II",
    company: "CodeMettle",
    location: "Atlanta, GA",
    bullets: [
      "Built a React/TypeScript modem rack dashboard integrating REST APIs for real-time visibility across 100+ devices.",
      "Created a Java CLI tool that cut on-site integration time from 1 hour down to 5 minutes.",
      "Implemented a Python monitoring script tracking distributed node lag, reducing customer impact to 0%.",
      "Built a chunked file transfer system with checksum validation for a cross-platform operations dashboard.",
    ],
  },
  {
    period: "Jun 2023 — Jan 2025",
    title: "Software Development Engineer I",
    company: "CodeMettle",
    location: "Atlanta, GA",
    bullets: [
      "Resolved CI/CD pipeline failures by updating Python MagicMock test cases, improving deployment efficiency by 50%.",
      "Designed a Bash script to automate MongoDB backups to a secondary cluster, eliminating server downtime entirely.",
      "Built Grafana dashboards integrating MongoDB log data, enhancing operational monitoring visibility by 80%.",
      "Worked with GitLab and GitHub Actions to deploy and test containerized microservices.",
    ],
  },
  {
    period: "Sep 2022 — Jun 2023",
    title: "Junior Software Engineer",
    company: "CodeMettle",
    location: "Atlanta, GA",
    bullets: [
      "Re-engineered Python translator files into proprietary JSON for the Terminus application, enabling contracts valued over $10M.",
      "Configured ProxMox Linux VMs for parallel team testing environments, removing environment conflicts.",
      "Collaborated in Agile workflows: Jira ticket creation, code reviews, QA, and sprint planning.",
    ],
  },
  {
    period: "2018 — 2022",
    title: "B.S. Computer Science",
    company: "Georgia State University",
    location: "Atlanta, GA",
    bullets: [
      "Graduated with a Bachelor of Science in Computer Science.",
      "Joined CodeMettle through the university's co-op program prior to graduation.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <p className="section-label">Career</p>
        <h2 className="headline-2 mb-12">Experience</h2>

        <div className="relative pl-6">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-zinc-700/60"></div>

          <div className="space-y-10">
            {experiences.map(({ period, title, company, location, bullets }, i) => (
              <div key={i} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[25px] top-2 w-3 h-3 rounded-full bg-sky-400 ring-4 ring-zinc-900"></div>

                <div className="bg-zinc-800/40 rounded-2xl p-6 ring-1 ring-inset ring-zinc-50/5 hover:bg-zinc-800/60 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-zinc-50 font-semibold text-lg leading-snug">
                        {title}
                      </h3>
                      <p className="text-sky-400 text-sm font-medium mt-0.5">
                        {company} &middot; {location}
                      </p>
                    </div>
                    <span className="text-xs text-zinc-500 bg-zinc-800 px-3 py-1.5 rounded-full ring-1 ring-inset ring-zinc-700/50 whitespace-nowrap shrink-0">
                      {period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                        <span className="text-sky-400 shrink-0 mt-0.5 text-xs">▹</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
