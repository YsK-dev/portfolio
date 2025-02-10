import '../App.css'; // Create this file for AdminPanel styles

import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
export default ProjectList;