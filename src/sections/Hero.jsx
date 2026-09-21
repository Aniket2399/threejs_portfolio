import { useEffect, useState } from "react";
import { profile } from "../constants";
import { posts } from "../constants/posts";

const Arrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

const STEP = 320; // card width in px (matches .post-card)
const INTERVAL = 3000; // advance one card every 3s
const EASE_MS = 700; // slide transition, like the reference

const Hero = () => {
  // enough copies that the visible window never runs out before we snap back
  const reps = Math.max(3, Math.ceil(12 / posts.length));
  const loop = Array.from({ length: reps }).flatMap(() => posts);

  const [idx, setIdx] = useState(0);
  const [animate, setAnimate] = useState(true);

  // auto-advance one card at a time
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => i + 1), INTERVAL);
    return () => clearInterval(id);
  }, []);

  // when a full set has scrolled by, snap back to the start with no transition
  useEffect(() => {
    if (idx === posts.length) {
      const t = setTimeout(() => setAnimate(false), EASE_MS);
      return () => clearTimeout(t);
    }
    if (!animate) {
      setIdx(0);
      const r = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
      return () => cancelAnimationFrame(r);
    }
  }, [idx, animate]);

  return (
    <section id="top" className="section">
      <div className="wrap">
        <h1 className="h1">Hi, my name is Aniket.</h1>

        <p className="hero-intro mt-6">{profile.blurb}</p>
      </div>

      {/* Latest posts carousel: full-width to the right, left edge aligned with
          the intro text; slides one card at a time like the reference */}
      <div className="latest">
        <h2 className="latest-heading">Latest posts</h2>

        <div className="latest-marquee">
          <div
            className="latest-track"
            style={{
              transform: `translateX(-${idx * STEP}px)`,
              transition: animate ? `transform ${EASE_MS}ms ease` : "none",
            }}
          >
            {loop.map((p, i) => (
              <a key={`${p.slug}-${i}`} href={`#post-${p.slug}`} className="post-card" aria-hidden={i >= posts.length}>
                <span className="latest-date">{p.dateLabel}</span>
                <span className="post-card-title">{p.title}</span>
                <span className="latest-desc">{p.excerpt}</span>
                <span className="post-card-read">
                  Read <Arrow />
                </span>
              </a>
            ))}
          </div>
        </div>

        <a href="#blog" className="link latest-all">
          All posts
        </a>
      </div>
    </section>
  );
};

export default Hero;
