const stats = [
  { value: "3+", label: "Years at CodeMettle" },
  { value: "2", label: "Promotions Earned" },
  { value: "0%", label: "Customer Downtime" },
  { value: "$10M+", label: "Contracts Enabled" },
];

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <p className="section-label">Background</p>
        <h2 className="headline-2 mb-8">About Me</h2>

        <div className="bg-white/60 rounded-2xl p-8 md:p-12 ring-1 ring-inset ring-stone-200">
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <p className="text-stone-600 leading-relaxed">
              I&apos;m a Software Development Engineer based in Suwanee, GA with 3+
              years of professional experience at CodeMettle, where I&apos;ve grown
              from Junior Engineer to SDE II. I hold a B.S. in Computer Science
              from Georgia State University (2022).
            </p>
            <p className="text-stone-500 leading-relaxed">
              My work spans React dashboards, Python automation scripts, Java CLI
              tools, and CI/CD pipelines. I care about measurable outcomes —
              zero downtime, faster delivery, and software that keeps working
              when it matters most.
            </p>
          </div>

          <div className="pt-8 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl md:text-3xl font-bold text-stone-800 mb-1">
                  {value}
                </div>
                <div className="text-sm text-stone-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
