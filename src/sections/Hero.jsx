import { profile } from "../constants";
import { posts } from "../constants/posts";

const Arrow = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

const Hero = () => {
  const latest = posts.slice(0, 3);

  return (
    <section id="top" className="section">
      <div className="wrap">
        <h1 className="h1">Hi, my name is Aniket.</h1>

        <p className="hero-intro mt-6">{profile.blurb}</p>

        <div className="latest">
          <h2 className="latest-heading">Latest posts</h2>

          <div className="latest-list">
            {latest.map((p) => (
              <a key={p.slug} href={`#post-${p.slug}`} className="latest-item">
                <span className="latest-text">
                  <span className="latest-date">{p.dateLabel}</span>
                  <span className="latest-title">{p.title}</span>
                  <span className="latest-desc">{p.excerpt}</span>
                </span>
                <span className="latest-arrow">
                  <Arrow />
                </span>
              </a>
            ))}
          </div>

          <a href="#blog" className="link latest-all">
            All posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
