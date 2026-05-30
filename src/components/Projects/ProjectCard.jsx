import { FaGithub } from "react-icons/fa";

function ProjectCard({ title, description, github }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>

      <p>{description}</p>

      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="github-btn"
      >
        <FaGithub />
        View Repository
      </a>
    </div>
  );
}

export default ProjectCard;