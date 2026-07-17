import { featuredProjects } from "../constants";

const Projects = () => {
  return (
    <section id="projects-preview" className="section">
      <div className="wrap">
        <h2 className="section-title">Projects</h2>
        <p className="section-note">Selected analytics platforms. Open the projects page for detail.</p>

        <div>
          {featuredProjects.map((p) => (
            <div key={p.name} className="proj-row">
              <a href="#projects" className="font-bold link">
                {p.name}
              </a>
              <span className="muted small">{p.tagline}</span>
              <span className="leader-fill" />
            </div>
          ))}
        </div>

        <a href="#projects" className="btn btn-primary mt-8">
          View projects
        </a>
      </div>
    </section>
  );
};

export default Projects;
