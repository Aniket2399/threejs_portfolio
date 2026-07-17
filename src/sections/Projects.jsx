import { featuredProjects, otherProjects } from "../constants";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <h2 className="section-title">Projects</h2>
        <p className="section-note">
          Analytics platforms I built end to end, from raw data to a deployed dashboard.
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
                  <h3 className="text-[19px] font-bold">{p.name}</h3>
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
          <h3 className="text-[15px] font-bold mb-1">Also built</h3>
          {otherProjects.map((p) => (
            <div key={p.name} className="leader small">
              <span className="font-bold">{p.name}</span>
              <span className="muted">{p.note}</span>
              <span className="leader-fill" />
              <a href={p.code} target="_blank" rel="noreferrer" className="link">
                Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
