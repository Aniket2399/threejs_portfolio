import { heroTools, metrics, profile } from "../constants";

const Hero = () => {
  return (
    <section id="top" className="section">
      <div className="wrap">
        <p className="small muted mb-3">{profile.location}</p>
        <h1 className="h1">{profile.role}</h1>

        <div className="mt-6 flex flex-col gap-4">
          <p className="lead">{profile.blurb}</p>
          <p className="lead muted">{profile.blurb2}</p>
        </div>

        <div className="tools mt-7">
          {heroTools.map((t) => (
            <span key={t} className="tool">
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-8">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href={profile.cv} target="_blank" rel="noreferrer" className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn">
            Get in Touch
          </a>
        </div>

        <div className="metrics mt-10">
          {metrics.map((m) => (
            <div key={m.label} className="metric">
              <div className="metric-value">{m.value}</div>
              <div className="metric-label">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
