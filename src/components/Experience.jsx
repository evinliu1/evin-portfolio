const experiences = [
  {
    period: "Jan 2025 — Present",
    title: "Software Development Engineer II",
    company: "CodeMettle",
    location: "Atlanta, GA",
    bullets: [
      "Engineered a Python orchestration module that listens for scheduled-workload events over a NATS message bus and triggers Helm-based Kubernetes deployments to spin up and tear down Docker containers.",
      "Architected a per-job deployment pattern where each scheduled workload provisions its own dedicated Kubernetes Helm release tied to a specific physical hardware device, with cleanup handled automatically when the workload ends.",
      "Developed a Python based file transfer system for a cross-platform dashboard by implementing a chunked transfer method with checksum validation to ensure data integrity.",
      "Resolved cluster sync-drift issues by building a Python monitoring script that tracks secondary-node lag and triggers threshold-based alerts, reducing customer-facing incidents to zero.",
    ],
  },
  {
    period: "Jun 2023 — Jan 2025",
    title: "Software Development Engineer I",
    company: "CodeMettle",
    location: "Atlanta, GA",
    bullets: [
      "Maintained and improved CI/CD pipelines for containerized microservices, streamlining deployments through refined YAML manifests and automation scripts.",
      "Built a real-time React/TypeScript dashboard integrating REST APIs to visualize modem positions, alarm statuses, and sizing data, giving field technicians faster visibility into hardware status.",
      "Automated MongoDB backups to a secondary cluster via a custom Bash script, eliminating customer-facing downtime during backup windows.",
      "Built Grafana dashboards integrating MongoDB log data to surface real-time metrics on remote system activity, improving the team's ability to detect and respond to issues.",
    ],
  },
  {
    period: "Sep 2022 — Jun 2023",
    title: "Junior Software Engineer",
    company: "CodeMettle",
    location: "Atlanta, GA",
    bullets: [
      "Contributed across the full Agile cycle such as ticket creation, development, QA, and code review supporting on-time delivery of releases.",
      "Re-architected Python translator modules into Terminus's proprietary JSON-based language format, directly contributing to 3 separate secured contracts valued over $10M.",
      "Provisioned and configured isolated Linux test environments on Proxmox VMs, enabling company engineers to run parallel tests without environment conflicts.",
    ],
  },
  {
    period: "2018 — 2022",
    title: "B.S. Computer Science",
    company: "Georgia State University",
    location: "Atlanta, GA",
    bullets: ["Graduated with a Bachelor of Science in Computer Science."],
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
          <div className="absolute left-0 top-2 bottom-2 w-px bg-stone-300"></div>

          <div className="space-y-10">
            {experiences.map(
              ({ period, title, company, location, bullets }, i) => (
                <div key={i} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[25px] top-2 w-3 h-3 rounded-full bg-terra ring-4 ring-cream"></div>

                  <div className="bg-white/60 rounded-2xl p-6 ring-1 ring-inset ring-stone-200 hover:bg-white/80 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-stone-800 font-semibold text-lg leading-snug">
                          {title}
                        </h3>
                        <p className="text-terra text-sm font-medium mt-0.5">
                          {company} &middot; {location}
                        </p>
                      </div>
                      <span className="text-xs text-stone-500 bg-stone-100 px-3 py-1.5 rounded-full ring-1 ring-inset ring-stone-200 whitespace-nowrap shrink-0">
                        {period}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-sm text-stone-500 leading-relaxed"
                        >
                          <span className="text-terra shrink-0 mt-0.5 text-xs">
                            ▹
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
