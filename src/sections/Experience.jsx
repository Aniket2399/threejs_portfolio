import { experience } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <h2 className="section-title">Experience</h2>
        <p className="section-note">5+ years across banking, healthcare, and retail.</p>

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
      </div>
    </section>
  );
};

export default Experience;
