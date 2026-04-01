import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, subtitle, description, tags, projectLink }) => {
  return (
    <div className="group flex flex-col rounded-2xl bg-white/60 ring-1 ring-inset ring-stone-200 overflow-hidden hover:ring-stone-300 hover:bg-white/80 transition-all duration-300">
      <figure className="overflow-hidden bg-stone-200" style={{ aspectRatio: "16/9" }}>
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </figure>

      <div className="flex flex-col flex-1 p-6">
        <p className="text-terra text-xs font-semibold uppercase tracking-widest mb-1">
          {subtitle}
        </p>
        <h3 className="text-stone-800 font-semibold text-xl mb-3">{title}</h3>
        <p className="text-stone-500 text-sm leading-relaxed flex-1 mb-5">{description}</p>

        <div className="flex items-center justify-between gap-3 mt-auto">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs text-stone-500 bg-stone-100 px-2.5 py-1 rounded-md"
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
              className="shrink-0 w-9 h-9 rounded-lg bg-terra text-white grid place-items-center hover:bg-terra-dark transition-colors"
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
