interface IExperienceItemProps {
  experience: {
    years: string;
    headline: string;
    title: string;
    notes: string;
    link: string;
  };
}

export const ExperienceItem = ({ experience }: IExperienceItemProps) => {
  return (
    <li className="c-experience">
      <time className="c-experience__date">{experience.years}</time>
      <div>
        <header className="c-experience__header">{experience.headline}</header>
        <a
          className="c-experience__title"
          href={experience.link}
          target="_blank"
        >
          {experience.title}
        </a>
        <div className="c-experience__content">{experience.notes}</div>
      </div>
    </li>
  );
};
