import { useState } from "react";
import { education, profile } from "../constants";

const About = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="section">
      <div className="wrap">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {/* Left: reference-style profile card */}
          <div className="ticked">
            <div className="card-head">About</div>
            <div className="card-body flex flex-col items-center text-center">
              <span className="photo-frame">
                <img src="/images/headshot.jpg" alt={profile.name} />
              </span>
              <p className="font-bold text-[15px] mt-4">{profile.name}</p>
              <p className="small muted">{profile.role}</p>
              <p className="small muted">{profile.location}</p>

              <div className="flex flex-wrap justify-center gap-3 mt-5">
                <a href={profile.cv} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Download CV
                </a>
                <button type="button" onClick={copyEmail} className="btn">
                  {copied ? "Email copied" : "Copy email"}
                </button>
              </div>
            </div>
          </div>

          {/* Right: background card */}
          <div className="ticked md:col-span-2">
            <div className="card-head">Background</div>
            <div className="card-body">
              <p className="lead">
                I like finding the story hidden in data: catching fraud patterns, forecasting
                demand, and building dashboards people actually use to decide. Clean data and a clear
                answer beat a fancy chart every time.
              </p>
              <p className="lead muted mt-3">
                I have worked across banking fraud analytics at JP Morgan Chase, healthcare reporting
                at Capgemini, and retail forecasting at Accenture. On the side I build analytics
                platforms end to end, which is where the SQL, dbt, DuckDB, and dashboard work in my
                projects comes from.
              </p>

              <h3 className="text-[13px] font-bold mt-7 mb-2">Education</h3>
              {education.map((ed) => (
                <div key={ed.school} className="leader small">
                  <span className="font-bold">{ed.degree}</span>
                  <span className="muted">{ed.school}</span>
                  <span className="leader-fill" />
                  <span className="muted">
                    {ed.date}, {ed.note}
                  </span>
                </div>
              ))}

              <h3 className="text-[13px] font-bold mt-6 mb-2">Certification</h3>
              <p className="small muted">
                INSPIRE (International Student Professional Readiness Education) Program, Pace
                University, Nov 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
