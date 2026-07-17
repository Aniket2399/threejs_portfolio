import { profile, featuredProjects, otherProjects } from "../constants";
import ThemeToggle from "../components/ThemeToggle";

const Work = () => {
  return (
    <div>
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="font-bold text-[15px]">
            {profile.name}
          </a>
          <nav className="nav-links">
            <a href="#top">Back to portfolio</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <section className="section" style={{ borderBottom: "none" }}>
        <div className="wrap">
          <h1 className="section-title">Case Studies</h1>
          <p className="section-note">
            The full detail behind each analytics platform, with the dashboards they produce.
          </p>

          <div className="flex flex-col gap-8">
            {featuredProjects.map((p) => (
              <article key={p.name} className="card ticked">
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <a href={p.live} target="_blank" rel="noreferrer">
                      <img src={p.image} alt={`${p.name} dashboard`} className="shot" />
                    </a>
                    {p.caption && <p className="small muted mt-2">{p.caption}</p>}
                  </div>

                  <div>
                    <h2 className="text-[20px] font-bold">{p.name}</h2>
                    <p className="small muted">{p.tagline}</p>
                    <p className="small mt-2">{p.stack}</p>

                    <ul className="bullets">
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
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-[15px] font-bold mb-2">Also built</h3>
            {otherProjects.map((p) => (
              <div key={p.name} className="leader">
                <span className="font-bold">{p.name}</span>
                <span className="muted small">{p.note}</span>
                <span className="leader-fill" />
                <a href={p.code} target="_blank" rel="noreferrer" className="link small">
                  Code
                </a>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-10">
            <a href="#top" className="btn btn-primary">
              Back to portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
