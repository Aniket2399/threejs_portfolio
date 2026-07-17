import { skills } from "../constants";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <h2 className="section-title">Skills</h2>
        <p className="section-note">Tools I use day to day, grouped by what they are for.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
          {skills.map(({ group, items }) => (
            <div key={group}>
              <h3 className="text-[13px] font-bold mb-2">{group}</h3>
              <ul className="small muted flex flex-col gap-1">
                {items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
