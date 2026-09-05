import { featuredProjects } from "../constants";

const Projects = () => {
  return (
    <section id="projects-preview" className="section">
      <div className="wrap">
        <h2 className="section-title">Projects</h2>
        <p className="section-note">Selected analytics platforms. Open a folder for the full case study.</p>

        <div className="tree">
          <p className="tree-root">~/projects/</p>

          {featuredProjects.map((p, i) => {
            const last = i === featuredProjects.length - 1;
            const href = `#project-${p.slug}`;
            return (
              <div className="tree-node" key={p.slug}>
                <div className="tree-line">
                  <span className="tree-branch">{last ? "└──" : "├──"}</span>
                  <a href={href} className="tree-folder">
                    {p.slug}/
                  </a>
                </div>
                <div className={`tree-sub ${last ? "tree-sub-last" : ""}`}>
                  <p>{p.tagline}</p>
                  <p className="muted">{p.insight}</p>
                  <a href={href} className="tree-readmore">
                    [ read more ]
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <a href="#experience" className="btn btn-primary mt-8">
          View Experience
        </a>
      </div>
    </section>
  );
};

export default Projects;
