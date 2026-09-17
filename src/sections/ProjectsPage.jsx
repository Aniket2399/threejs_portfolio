import { featuredProjects, otherProjects } from "../constants";

const ProjectsPage = () => {
  return (
    <section className="section" style={{ borderBottom: "none" }}>
        <div className="wrap wrap-centered">
          <h1 className="section-title">Projects</h1>
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

          <h2 className="cv-h2" style={{ marginTop: 44 }}>
            More projects
          </h2>
          <p className="section-note" style={{ marginBottom: 20 }}>
            Mobile apps and other builds. Open the code on GitHub.
          </p>

          <div className="flex flex-col gap-6">
            {otherProjects.map((p) => (
              <div key={p.name}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-bold">{p.name}</span>
                  <span className="small">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="link">
                        Live
                      </a>
                    )}
                    {p.live && p.code && <span className="muted"> | </span>}
                    {p.code && (
                      <a href={p.code} target="_blank" rel="noreferrer" className="link">
                        Code
                      </a>
                    )}
                  </span>
                </div>
                {p.tech && <p className="small muted">{p.tech}</p>}
                <p>{p.note}</p>
              </div>
            ))}
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
