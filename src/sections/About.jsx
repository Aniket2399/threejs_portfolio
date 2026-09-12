import { useEffect, useState } from "react";

const sections = [
  {
    id: "where-i-started",
    title: "Where I started",
    toc: "Where I started",
    body: "I grew up in Pune and studied computer science, though I spent more time on the robotics team than in lectures. Over three years I went from technical coordinator to running our flagship robotics event, and somewhere in there I also played state-level soccer. Both taught me the same thing: I like building with a team, and I like winning on the details.",
  },
  {
    id: "falling-for-data",
    title: "Falling for data",
    toc: "Falling for data",
    body: "My first real job was as a junior data analyst at Accenture, cleaning messy retail data and turning it into Tableau dashboards people could act on. At Capgemini I automated healthcare reporting end to end and learned the lesson that still drives me: the win is never the chart, it is whether someone changed a decision because of it.",
  },
  {
    id: "learning-to-build",
    title: "Learning to build, not just analyze",
    toc: "Learning to build",
    body: "I moved to New York for a master's in computer science at Pace, and the more I analyzed data, the more I wanted to own the whole thing, from the raw pipeline to the interface people click. So I started building: a data analyst internship at JPMorgan tuning SQL until dashboards loaded fast, a founding full-stack engineer role at Astoria AI taking LLM agents to production and shipping the React dashboard the team runs them from, and analytics platforms of my own (PepStats, COURTSIDE, SelfPrep) that go from raw events all the way to a live product.",
  },
  {
    id: "where-i-am-now",
    title: "Where I am now",
    toc: "Where I am now",
    body: "Today I am a senior data analyst at JPMorgan Chase working on fraud analytics, rebuilding detection rules and the dashboards that surface anomalies before they cost the business. On nights and weekends I am usually deep in React and Next.js, turning a dataset into something you can actually explore.",
  },
  {
    id: "what-i-am-pursuing",
    title: "What I am pursuing",
    toc: "What I am pursuing",
    body: "I want to keep living in both worlds, the analysis and the interface. My goal is to build data products end to end, where the insight and the experience of using it are designed together. If that is the kind of work your team does, I would love to talk.",
  },
];

const About = () => {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-90px 0px -65% 0px", threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView();
  };

  return (
    <section id="about" className="section">
      <div className="wrap">
        <h2 className="section-title">About</h2>
        <p className="section-note">Where I started, what I have built, and where I am headed.</p>

        <div className="about-layout">
          <div className="about-main">
            {sections.map((s) => (
              <div key={s.id}>
                <h3 id={s.id} className="journey-h text-[22px] font-bold mt-8 mb-3">
                  {s.title}
                </h3>
                <p className="lead">{s.body}</p>
              </div>
            ))}
          </div>

          <nav className="about-toc">
            <p className="toc-label">On this page</p>
            {sections.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => goTo(s.id)}
                className={`toc-link ${active === s.id ? "active" : ""}`}
              >
                {s.toc}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default About;
