import { profile } from "../constants";
import { posts } from "../constants/posts";

const Blog = () => {
  return (
    <section id="blog" className="section">
      <div className="wrap wrap-centered">
        <h2 className="section-title">Blog</h2>
        <p className="section-note">
          Daily notes on how AI is changing the way we work and live, and how to use it well.
        </p>

        <div className="flex flex-col gap-10 mt-2">
          {posts.map((p) => {
            const href = `#post-${p.slug}`;
            return (
              <article key={p.slug}>
                <p className="small muted">
                  {p.dateLabel} · {p.readingTime}
                </p>
                <h3 className="text-[22px] font-bold mt-1 mb-2">
                  <a href={href} className="link">
                    {p.title}
                  </a>
                </h3>
                <p className="lead">{p.excerpt}</p>
                <a href={href} className="tree-readmore mt-3 inline-block">
                  [ read post ]
                </a>
              </article>
            );
          })}
        </div>

        <div className="flex gap-4 mt-12 small">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link">
            Follow on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
