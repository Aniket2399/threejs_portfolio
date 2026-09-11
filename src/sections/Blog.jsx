import { profile } from "../constants";

const Blog = () => {
  return (
    <section id="blog" className="section">
      <div className="wrap">
        <h2 className="section-title">Blog</h2>
        <p className="section-note">
          Short weekly notes on data, frontend, and AI, cross-posted to LinkedIn.
        </p>

        <div className="card ticked">
          <span className="blog-badge">Coming soon</span>
          <p className="blog-soon">One post a week, starting soon.</p>
          <p className="lead muted">
            I am starting a weekly write-up on something in tech close to my work: a data or
            frontend problem I solved, a pattern worth sharing, or a note on what I am building.
            Each one goes here and on LinkedIn. Check back shortly, or connect on LinkedIn to catch
            the first one.
          </p>
          <div className="flex gap-4 mt-4 small">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link">
              Follow on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
