function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <p className="project-tag">{project.category}</p>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="tech-list">
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default ProjectCard;
