import { useEffect, useRef, useState } from "react";
import { profile } from "../constants";
import { posts } from "../constants/posts";

const ArrowIcon = ({ dir = "right" }) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={dir === "left" ? { transform: "scaleX(-1)" } : undefined}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

const GAP = 24; // px gap between cards (matches .latest-track gap)
const INTERVAL = 3000; // auto-advance one card every 3s
const EASE_MS = 700; // slide transition, like the reference

const Hero = () => {
  const L = posts.length;
  const reps = Math.max(4, Math.ceil(16 / L));
  const loop = Array.from({ length: reps }).flatMap(() => posts);

  const marqueeRef = useRef(null);
  const [cardW, setCardW] = useState(300);
  const [idx, setIdx] = useState(L); // start one set in, so "prev" has room
  const [animate, setAnimate] = useState(true);

  // size cards so exactly N fill the width (3 on desktop, 2 on tablet, 1 on mobile)
  useEffect(() => {
    const measure = () => {
      const w = marqueeRef.current?.clientWidth || 0;
      if (!w) return;
      const vis = w < 640 ? 1 : w < 1024 ? 2 : 3;
      setCardW(Math.round((w - (vis - 1) * GAP) / vis));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const step = cardW + GAP;

  const go = (d) => setIdx((i) => i + d);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => i + 1), INTERVAL);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!animate) {
      const r = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
      return () => cancelAnimationFrame(r);
    }
  }, [animate]);

  // seamless loop: after a slide finishes, snap back into the middle set
  const onSettle = () => {
    if (idx >= 2 * L) {
      setAnimate(false);
      setIdx(idx - L);
    } else if (idx < L) {
      setAnimate(false);
      setIdx(idx + L);
    }
  };

  return (
    <section id="top" className="section">
      <div className="wrap">
        <h1 className="h1">Hi, my name is Aniket.</h1>

        <p className="hero-intro mt-6">{profile.blurb}</p>
      </div>

      {/* Latest posts carousel: shows three cards at a time and slides one at a
          time, like the reference */}
      <div className="latest">
        <h2 className="latest-heading">Latest posts</h2>

        <div className="latest-marquee" ref={marqueeRef}>
          <div
            className="latest-track"
            style={{
              transform: `translateX(-${idx * step}px)`,
              transition: animate ? `transform ${EASE_MS}ms ease` : "none",
            }}
            onTransitionEnd={onSettle}
          >
            {loop.map((p, i) => (
              <a key={`${p.slug}-${i}`} href={`#post-${p.slug}`} className="post-card" style={{ width: cardW }}>
                <span className="latest-date">{p.dateLabel}</span>
                <span className="post-card-title">{p.title}</span>
                <span className="latest-desc">{p.excerpt}</span>
                <span className="post-card-read">
                  Read <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="latest-foot">
          <button type="button" className="latest-btn" onClick={() => go(-1)} aria-label="Previous posts">
            <ArrowIcon dir="left" />
          </button>
          <button type="button" className="latest-btn" onClick={() => go(1)} aria-label="Next posts">
            <ArrowIcon dir="right" />
          </button>
          <a href="#blog" className="link latest-all">
            All posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
