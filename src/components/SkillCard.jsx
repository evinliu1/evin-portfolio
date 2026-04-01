import PropTypes from "prop-types";

const SkillCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div
      className={
        "flex items-center gap-3 ring-2 ring-inset ring-stone-200 rounded-2xl p-3 hover:bg-stone-100 " +
        classes
      }
    >
      <figure className="bg-stone-200 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-stone-300 transition-colors">
        <img src={imgSrc} width={32} height={32} alt={label} />
      </figure>

      <div>
        <h3>{label}</h3>
        <p className="">{desc}</p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};
export default SkillCard;
