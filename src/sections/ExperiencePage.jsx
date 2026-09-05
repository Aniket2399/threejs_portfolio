import { profile, experience } from "../constants";
import ThemeToggle from "../components/ThemeToggle";

const ExperiencePage = () => {
  return (
    <div>
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="font-bold text-[15px]">
            {profile.name}
          </a>
          <nav className="nav-links">
            <a href="#top">Back to portfolio</a>
            <a href="#resume">CV</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <section className="section" style={{ borderBottom: "none" }}>
        <div className="wrap">
          <h1 className="section-title">Experience</h1>
          <p className="section-note">
            5+ years across banking fraud, healthcare, and retail analytics.
          </p>

          {experience.map((e) => (
            <div key={e.company + e.date} className="exp-row">
              <div>
                <p className="font-bold text-[15px]">{e.company}</p>
                <p className="small muted">{e.place}</p>
                <p className="small muted">{e.date}</p>
              </div>
              <div>
                <p className="font-bold text-[15px]">{e.role}</p>
                <ul className="bullets">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="mt-10">
            <a href="#top" className="btn btn-primary">
              Back to portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
