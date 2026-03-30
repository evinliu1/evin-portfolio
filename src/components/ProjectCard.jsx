import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, subtitle, description, tags, projectLink }) => {
  return (
    <div className="group flex flex-col rounded-2xl bg-zinc-800/40 ring-1 ring-inset ring-zinc-50/5 overflow-hidden hover:ring-zinc-50/10 hover:bg-zinc-800/60 transition-all duration-300">
      <figure className="overflow-hidden bg-zinc-700" style={{ aspectRatio: "16/9" }}>
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </figure>

      <div className="flex flex-col flex-1 p-6">
        <p className="text-sky-400 text-xs font-semibold uppercase tracking-widest mb-1">
          {subtitle}
        </p>
        <h3 className="text-zinc-50 font-semibold text-xl mb-3">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-5">{description}</p>

        <div className="flex items-center justify-between gap-3 mt-auto">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs text-zinc-500 bg-zinc-700/60 px-2.5 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${title}`}
              className="shrink-0 w-9 h-9 rounded-lg bg-sky-400 text-zinc-950 grid place-items-center hover:bg-sky-300 transition-colors"
            >
              <span className="material-symbols-rounded text-[18px]">arrow_outward</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
};

export default ProjectCard;
