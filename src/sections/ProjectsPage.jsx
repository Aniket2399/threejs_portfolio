import { profile, featuredProjects } from "../constants";
import ThemeToggle from "../components/ThemeToggle";

const ProjectsPage = () => {
  return (
    <div>
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="font-bold text-[15px]">
            {profile.name}
          </a>
          <nav className="nav-links">
            <a href="#top">Back to portfolio</a>
            <a href="#cv">CV</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <section className="section" style={{ borderBottom: "none" }}>
        <div className="wrap">
          <h1 className="section-title">Projects</h1>
          <p className="section-note">
            Analytics platforms I built end to end, from raw data to a deployed dashboard.
          </p>

          <div className="flex flex-col gap-12">
            {featuredProjects.map((p) => (
              <article key={p.name}>
                <h2 className="text-[20px] font-bold">{p.name}</h2>
                <p className="small muted">{p.tagline}</p>

                <div className="tools mt-3">
                  {p.stack.split(",").map((t) => (
                    <span key={t} className="tool">
                      {t.trim()}
                    </span>
                  ))}
                </div>

                <a href={p.live} target="_blank" rel="noreferrer">
                  <img src={p.image} alt={`${p.name} dashboard`} className="shot mt-5" />
                </a>
                {p.caption && <p className="small muted mt-2">{p.caption}</p>}

                <ul className="bullets mt-3">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="flex gap-4 mt-4 small">
                  <a href={p.live} target="_blank" rel="noreferrer" className="link">
                    Live
                  </a>
                  <a href={p.code} target="_blank" rel="noreferrer" className="link">
                    Code
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <a href="#top" className="btn btn-primary">
              Back to portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
