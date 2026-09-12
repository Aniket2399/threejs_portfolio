import { featuredProjects } from "../constants";

const ProjectDetail = ({ slug }) => {
  const p = featuredProjects.find((x) => x.slug === slug);

  if (!p) {
    return (
      <section className="section" style={{ borderBottom: "none" }}>
        <div className="wrap">
          <h1 className="section-title">Project not found</h1>
          <a href="#projects" className="btn btn-primary mt-6">
            Back to projects
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="section" style={{ borderBottom: "none" }}>
        <div className="wrap" style={{ maxWidth: 860 }}>
          <p className="tree-root small">
            <a href="#projects" className="link">
              ~/projects
            </a>
            /{p.slug}/
          </p>

          <h1 className="section-title mt-3">{p.name}</h1>
          <p className="section-note" style={{ marginBottom: 20 }}>
            {p.tagline}
          </p>

          <div className="tools mb-6">
            {p.stack.split(",").map((t) => (
              <span key={t} className="tool">
                {t.trim()}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <a href={p.live} target="_blank" rel="noreferrer" className="btn">
              Live
            </a>
            <a href={p.code} target="_blank" rel="noreferrer" className="btn">
              Code
            </a>
          </div>

          {/* in-depth description */}
          <div className="flex flex-col gap-4">
            {p.description.map((para) => (
              <p className="lead" key={para.slice(0, 24)}>
                {para}
              </p>
            ))}
          </div>

          {/* highlights */}
          <h2 className="cv-h2">Highlights</h2>
          <ul className="bullets">
            {p.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          {/* screenshots as a file tree */}
          <h2 className="cv-h2">Screenshots</h2>
          <p className="tree-root small mb-4">{p.slug}/screenshots/</p>

          <div className="flex flex-col gap-8">
            {p.shots.map((s, i) => {
              const last = i === p.shots.length - 1;
              const file = s.src.split("/").pop();
              return (
                <figure key={s.src}>
                  <div className="tree-line mb-2">
                    <span className="tree-branch">{last ? "└──" : "├──"}</span>
                    <span className="small muted">{file}</span>
                  </div>
                  <a href={p.live} target="_blank" rel="noreferrer">
                    <img src={s.src} alt={s.cap} className="shot" />
                  </a>
                  <figcaption className="small muted mt-2">{s.cap}</figcaption>
                </figure>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3 mt-12">
            <a href="#projects" className="btn btn-primary">
              Back to projects
            </a>
            <a href={p.live} target="_blank" rel="noreferrer" className="btn">
              Open live dashboard
            </a>
          </div>
        </div>
      </section>
  );
};

export default ProjectDetail;
