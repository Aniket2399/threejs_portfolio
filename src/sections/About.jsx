const About = () => {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <h2 className="section-title">About</h2>
        <p className="section-note">Where I started, what I have built, and where I am headed.</p>

        <div>
          <h3 className="journey-h text-[22px] font-bold mt-6 mb-2">Where I started</h3>
          <p className="lead">
            I grew up in Pune and studied computer science, though I spent more time on the robotics
            team than in lectures. Over three years I went from technical coordinator to running our
            flagship robotics event, and somewhere in there I also played state-level soccer. Both
            taught me the same thing: I like building with a team, and I like winning on the details.
          </p>

          <h3 className="journey-h text-[22px] font-bold mt-8 mb-2">Falling for data</h3>
          <p className="lead">
            My first real job was as a junior data analyst at Accenture, cleaning messy retail data
            and turning it into Tableau dashboards people could act on. At Capgemini I automated
            healthcare reporting end to end and learned the lesson that still drives me: the win is
            never the chart, it is whether someone changed a decision because of it.
          </p>

          <h3 className="journey-h text-[22px] font-bold mt-8 mb-2">Learning to build, not just analyze</h3>
          <p className="lead">
            I moved to New York for a master's in computer science at Pace, and the more I analyzed
            data, the more I wanted to own the whole thing, from the raw pipeline to the interface
            people click. So I started building: a data analyst internship at JPMorgan tuning SQL
            until dashboards loaded fast, a founding full-stack engineer role at Astoria AI taking
            LLM agents to production and shipping the React dashboard the team runs them from, and
            analytics platforms of my own (PepStats, COURTSIDE, SelfPrep) that go from raw events all
            the way to a live product.
          </p>

          <h3 className="journey-h text-[22px] font-bold mt-8 mb-2">Where I am now</h3>
          <p className="lead">
            Today I am a senior data analyst at JPMorgan Chase working on fraud analytics, rebuilding
            detection rules and the dashboards that surface anomalies before they cost the business.
            On nights and weekends I am usually deep in React and Next.js, turning a dataset into
            something you can actually explore.
          </p>

          <h3 className="journey-h text-[22px] font-bold mt-8 mb-2">What I am pursuing</h3>
          <p className="lead">
            I want to keep living in both worlds, the analysis and the interface. My goal is to build
            data products end to end, where the insight and the experience of using it are designed
            together. If that is the kind of work your team does, I would love to talk.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
