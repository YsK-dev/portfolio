import '../App.css'; // Create this file for AdminPanel styles
const ProjectCard = ({ project }) => {
    return (
      <div className="project-card">
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    );
  };
  export default ProjectCard;