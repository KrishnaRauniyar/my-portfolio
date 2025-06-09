import { motion } from 'framer-motion';
import './../../assets/styles/projects.scss';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    technologies: ["React", "Node.js", "MongoDB", "Redux"],
    image: "/images/project1.jpg",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Healthcare Dashboard",
    description: "Real-time patient monitoring system for healthcare providers",
    technologies: ["React", "D3.js", "Firebase", "Material UI"],
    image: "/images/project2.jpg",
    link: "#",
    github: "#"
  }
];

const Projects = () => {
  return (
    <motion.section 
      id="projects"
      className="section projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} className="btn">Live Demo</a>
                  <a href={project.github} className="btn btn-outline">GitHub</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;