import { useEffect, useRef, useState } from "react";

const sections = [
  {
    id: "where-i-started",
    title: "Where I started",
    toc: "Where I started",
    body: [
      "I grew up in Pune and studied computer science, though I spent more time on the robotics team than in lectures. Over three years I went from technical coordinator to running our flagship robotics event, and somewhere in there I also played state-level soccer. Both taught me the same thing: I like building with a team, and I like winning on the details.",
      "Robotics was where I first learned to ship something real under a deadline, with hardware that did not care about excuses. Soccer taught me the rest: show up, read the game, and do the unglamorous work that decides it. I still carry both into every project, the urge to build something and the patience to get the small things right.",
    ],
  },
  {
    id: "falling-for-data",
    title: "Falling for data",
    toc: "Falling for data",
    body: [
      "My first real job was as a junior data analyst at Accenture, cleaning messy retail data and turning it into Tableau dashboards people could act on. At Capgemini I automated healthcare reporting end to end and learned the lesson that still drives me: the win is never the chart, it is whether someone changed a decision because of it.",
      "That is also where I got comfortable with the unglamorous half of analytics: validating inputs, handling nulls and duplicates, and building pipelines that stay trustworthy even when the source data does not. I learned to care less about a clever model and more about whether the numbers were clean enough to bet on, and whether the person reading them actually knew what to do next.",
    ],
  },
  {
    id: "learning-to-build",
    title: "Learning to build, not just analyze",
    toc: "Learning to build",
    body: [
      "I moved to New York for a master's in computer science at Pace, and the more I analyzed data, the more I wanted to own the whole thing, from the raw pipeline to the interface people click. So I started building: a data analyst internship at JPMorgan tuning SQL until dashboards loaded fast, a founding full-stack engineer role at Astoria AI taking LLM agents to production, and analytics platforms of my own that go from raw events all the way to a live product.",
      "Building those made me a better analyst and a real engineer at the same time. I stopped handing off a spreadsheet and started shipping the thing people actually use: React and Next.js front ends, FastAPI services, dbt and DuckDB pipelines, all tested and deployed. PepStats, COURTSIDE, and SelfPrep each began as a question I wanted answered and ended as a product anyone could open. Once you have owned an insight from the raw event to the button someone clicks, you never see analysis the same way again.",
    ],
  },
  {
    id: "where-i-am-now",
    title: "Where I am now",
    toc: "Where I am now",
    body: [
      "Today I am a senior data analyst at JPMorgan Chase working on fraud analytics, rebuilding detection rules and the dashboards that surface anomalies before they cost the business. On nights and weekends I am usually deep in React and Next.js, turning a dataset into something you can actually explore.",
      "The fraud work is the analyst in me: trace where the rules misfire, cut the false positives that drain investigators, and get the signal in front of the right people early enough to matter. The side projects are the builder in me refusing to sit still. Between the two I get to run the full loop every week, from the question to the query to the interface that answers it.",
    ],
  },
  {
    id: "what-i-am-pursuing",
    title: "What I am pursuing",
    toc: "What I am pursuing",
    body: [
      "I want to keep living in both worlds, the analysis and the interface. My goal is to build data products end to end, where the insight and the experience of using it are designed together, not bolted on after the fact.",
      "Concretely, I am looking for a role where I can own a data product from the pipeline to the polished front end: a data or analytics team that cares about a strong interface, or a product team that wants someone who genuinely understands the data underneath. Either way I care about the same thing, shipping something people use to make a better decision. If that sounds like your team, I would love to talk.",
    ],
  },
];

const About = () => {
  const [active, setActive] = useState(sections[0].id);
  // while a TOC click is smooth-scrolling, ignore the observer so the active
  // highlight goes straight to the target instead of bouncing through sections
  const clicking = useRef(false);
  const clickTimer = useRef();

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        if (clicking.current) return;
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
    if (!el) return;
    clicking.current = true;
    setActive(id);
    // manual smooth-scroll tween (native smooth is unreliable inside the
    // flex/grid layout here); animates the same on both TOC pages
    const startY = window.scrollY;
    const targetY = el.getBoundingClientRect().top + startY - 24;
    const dur = 500;
    const t0 = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - t0) / dur);
      const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      window.scrollTo(0, startY + (targetY - startY) * ease);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    window.clearTimeout(clickTimer.current);
    clickTimer.current = window.setTimeout(() => {
      clicking.current = false;
    }, dur + 150);
  };

  return (
    <section id="about" className="section">
      <div className="wrap">
        <div className="about-layout">
          <div className="about-main">
            <h2 className="section-title">My Journey</h2>
            <p className="section-note">
              Where I started, what I have built, and where I am headed.
            </p>

            {sections.map((s) => (
              <div key={s.id}>
                <h3 id={s.id} className="journey-h text-[22px] font-bold mt-10 mb-3">
                  {s.title}
                </h3>
                {s.body.map((para, i) => (
                  <p className="lead" key={i} style={i ? { marginTop: 14 } : undefined}>
                    {para}
                  </p>
                ))}
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
