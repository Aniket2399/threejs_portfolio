import { featuredProjects } from "../constants";

const ProjectsPage = () => {
  return (
    <section className="section" style={{ borderBottom: "none" }}>
        <div className="wrap">
          <h1 className="section-title">Websites</h1>
          <p className="section-note">
            Open a folder to read the full case study, with screenshots and detail.
          </p>

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

          <div className="mt-12">
            <a href="#top" className="btn btn-primary">
              Back to portfolio
            </a>
          </div>
        </div>
      </section>
  );
};

export default ProjectsPage;
