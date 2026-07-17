import {
  profile,
  experience,
  featuredProjects,
  otherProjects,
  skills,
  education,
  certifications,
  achievements,
} from "../constants";
import ThemeToggle from "../components/ThemeToggle";

const CV = () => {
  const projects = [
    ...featuredProjects.map((p) => ({
      name: p.name,
      meta: p.tagline,
      stack: p.stack,
      bullets: p.bullets,
      live: p.live,
      code: p.code,
    })),
    ...otherProjects.map((p) => ({
      name: p.name,
      meta: p.note,
      bullets: [],
      code: p.code,
    })),
  ];

  return (
    <div>
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="font-bold text-[14px]">
            {profile.name}
          </a>
          <nav className="nav-links">
            <a href="#top">Back to portfolio</a>
            <a href={profile.cv} target="_blank" rel="noreferrer" className="btn btn-primary">
              Download PDF
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <div className="wrap" style={{ maxWidth: 820 }}>
        <section className="section" style={{ borderBottom: "none" }}>
          {/* header */}
          <h1 className="h1" style={{ fontSize: "clamp(28px, 5vw, 40px)" }}>
            {profile.name}
          </h1>
          <p className="text-[15px] font-bold mt-1">{profile.role}</p>
          <p className="small muted mt-2">
            {profile.location} {" | "}
            <a href={`mailto:${profile.email}`} className="link">
              {profile.email}
            </a>{" "}
            {" | "}
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link">
              LinkedIn
            </a>{" "}
            {" | "}
            <a href={profile.github} target="_blank" rel="noreferrer" className="link">
              GitHub
            </a>
          </p>

          {/* summary */}
          <h2 className="cv-h2">Professional Summary</h2>
          <p className="small">{profile.summary}</p>

          {/* skills */}
          <h2 className="cv-h2">Skills</h2>
          <div className="flex flex-col gap-1">
            {skills.map(({ group, items }) => (
              <p key={group} className="small">
                <span className="font-bold">{group}:</span>{" "}
                <span className="muted">{items.join(", ")}</span>
              </p>
            ))}
          </div>

          {/* experience */}
          <h2 className="cv-h2">Work Experience</h2>
          {experience.map((e) => (
            <div key={e.company + e.date} className="mb-5">
              <div className="flex flex-wrap justify-between items-baseline gap-2">
                <span className="font-bold text-[14px]">
                  {e.role}, {e.company}
                </span>
                <span className="small muted">{e.date}</span>
              </div>
              <p className="small muted italic">{e.place}</p>
              <ul className="bullets">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* projects */}
          <h2 className="cv-h2">Projects</h2>
          {projects.map((p) => (
            <div key={p.name} className="mb-5">
              <div className="flex flex-wrap justify-between items-baseline gap-2">
                <span className="font-bold text-[14px]">{p.name}</span>
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
              <p className="small muted italic">{p.meta}</p>
              {p.stack && <p className="small">{p.stack}</p>}
              <ul className="bullets">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* education */}
          <h2 className="cv-h2">Education</h2>
          {education.map((ed) => (
            <div key={ed.school} className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
              <span className="small">
                <span className="font-bold">{ed.degree}</span>, {ed.school}{" "}
                <span className="muted">({ed.note})</span>
              </span>
              <span className="small muted">{ed.date}</span>
            </div>
          ))}

          {/* certifications */}
          <h2 className="cv-h2">Certifications</h2>
          <ul className="bullets">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          {/* achievements */}
          <h2 className="cv-h2">Achievements</h2>
          <ul className="bullets">
            {achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 mt-8">
            <a href={profile.cv} target="_blank" rel="noreferrer" className="btn btn-primary">
              Download PDF
            </a>
            <a href="#top" className="btn">
              Back to portfolio
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CV;
