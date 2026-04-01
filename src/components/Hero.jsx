import { ButtonOutline, ButtonPrimary } from "./Button";

const impactStats = [
  { value: "0%", label: "Customer Downtime" },
  { value: "50%", label: "Faster Deploys" },
  { value: "$10M+", label: "Contracts Enabled" },
  { value: "3+", label: "Years Experience" },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="container w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text content */}
          <div>
            <div className="inline-flex items-center gap-2.5 bg-white/80 border border-stone-200 rounded-full px-4 py-2 text-sm text-stone-500 mb-8">
              <span className="relative w-2 h-2 rounded-full bg-emerald-500 shrink-0">
                <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping"></span>
              </span>
              SDE II @ CodeMettle · Suwanee, GA
            </div>

            <h1 className="headline-1 mb-4">
              Hi, I&apos;m<br />Evin Liu.
            </h1>

            <p className="text-terra text-xl font-medium mb-6 tracking-wide">
              Software Development Engineer
            </p>

            <p className="text-stone-500 text-lg max-w-[48ch] mb-10 leading-relaxed">
              I build internal tooling, automation systems, and full&#8209;stack
              applications that reduce downtime, cut integration time, and scale
              reliably in production.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <ButtonPrimary
                href="/EvinLiu_Resume.pdf"
                target="_blank"
                label="Download Resume"
                icon="download"
              />
              <ButtonOutline href="#work" label="View Projects" icon="arrow_downward" />
            </div>

            {/* Impact stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 mt-10 pt-8 border-t border-stone-200">
              {impactStats.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-xl font-bold text-stone-800 mb-0.5">{value}</div>
                  <div className="text-xs text-stone-500">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div className="hidden lg:flex justify-end">
            <div className="relative w-full max-w-[420px]">
              {/* Warm glow behind photo */}
              <div className="absolute inset-0 bg-terra/10 rounded-3xl blur-3xl scale-110 pointer-events-none"></div>

              <figure className="relative rounded-3xl overflow-hidden ring-1 ring-stone-200">
                <img
                  src="/images/hero-banner.jpg"
                  alt="Evin Liu"
                  className="w-full h-full object-cover"
                />
                {/* Subtle gradient at bottom to blend into page */}
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-cream/70 to-transparent pointer-events-none"></div>
              </figure>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
