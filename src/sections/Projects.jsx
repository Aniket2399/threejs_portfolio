import { featuredProjects, otherProjects } from "../constants";

const Projects = () => {
  const rows = [
    ...featuredProjects.map((p) => ({
      name: p.name,
      note: p.tagline,
      live: p.live,
      code: p.code,
    })),
    ...otherProjects.map((p) => ({ name: p.name, note: p.note, code: p.code })),
  ];

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <h2 className="section-title">Projects</h2>
        <p className="section-note">
          Analytics platforms I built end to end. Open a case study for the dashboards and detail.
        </p>

        <div>
          {rows.map((p) => (
            <div key={p.name} className="proj-row">
              <span className="font-bold">{p.name}</span>
              <span className="muted small">{p.note}</span>
              <span className="leader-fill" />
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="link small">
                  Live
                </a>
              )}
              {p.code && (
                <a href={p.code} target="_blank" rel="noreferrer" className="link small">
                  Code
                </a>
              )}
            </div>
          ))}
        </div>

        <a href="#work" className="btn btn-primary mt-8">
          View case studies
        </a>
      </div>
    </section>
  );
};

export default Projects;
