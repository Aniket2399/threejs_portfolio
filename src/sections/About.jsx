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
    title: "Finding the craft",
    toc: "Finding the craft",
    body: [
      "My first real jobs were in web and front-end work. At Accenture I built dashboards and web views out of messy data, and at Capgemini I moved into front-end proper, building React interfaces for enterprise reporting and writing the UI test automation that kept them reliable release after release.",
      "That is where I learned the unglamorous half of shipping software: validating inputs, handling the edge cases, and building things people can trust even when the data behind them is a mess. I cared less about a clever chart and more about whether the thing worked, loaded fast, and told someone exactly what to do next.",
    ],
  },
  {
    id: "learning-to-build",
    title: "Owning the whole stack",
    toc: "Owning the stack",
    body: [
      "I moved to New York for a master's in computer science at Pace, and the more I built, the more I wanted to own the whole stack, from the service and the data behind it to the interface people click. So I went deeper: a founding full stack engineer role at Astoria AI taking LLM agents to production, a summer at JPMorgan tuning SQL until dashboards loaded fast, and full-stack products of my own that go from raw events all the way to a live app.",
      "Those turned me into a real engineer. I stopped handing off a spreadsheet and started shipping the thing people actually use: React and Next.js front ends, Node and FastAPI services, REST APIs, all tested, monitored, and deployed. SelfPrep, PepStats, and COURTSIDE each began as a question I wanted answered and ended as a product anyone could open. Once you have owned something from the backend to the button someone clicks, you never want to build just one layer again.",
    ],
  },
  {
    id: "where-i-am-now",
    title: "Where I am now",
    toc: "Where I am now",
    body: [
      "Today I am a full stack developer at JP Morgan Chase, building and operating back-end services and the React dashboards on top of them, in a high-stakes, heavily regulated environment where reliability is not optional. On nights and weekends I am usually deep in React, Next.js, and whatever I am currently taking apart to rebuild.",
      "The day job is the engineer in me: write clean, tested code, keep it monitored and reliable, and make technical decisions I can explain to anyone. The side projects are the builder in me refusing to sit still. Between the two I get to run the full loop every week, from the problem to the service to the interface that solves it.",
    ],
  },
  {
    id: "what-i-am-pursuing",
    title: "What I am pursuing",
    toc: "What I am pursuing",
    body: [
      "I want to keep building full stack, where the backend, the data, and the interface are designed together rather than bolted on after the fact. My goal is to own features end to end and ship software people actually reach for.",
      "Concretely, I am looking for a frontend, backend, or full-stack engineering role on a team that cares about craft and moves fast, somewhere I can build real products, work with AI tooling instead of around it, and sweat the small details that make software feel good to use. If that sounds like your team, I would love to talk.",
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
