import { profile } from "../constants";
import { posts } from "../constants/posts";

const BlogPost = ({ slug }) => {
  const p = posts.find((x) => x.slug === slug);

  if (!p) {
    return (
      <section className="section" style={{ borderBottom: "none" }}>
        <div className="wrap">
          <h1 className="section-title">Post not found</h1>
          <a href="#blog" className="btn btn-primary mt-6">
            Back to blog
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="section" style={{ borderBottom: "none" }}>
      <div className="wrap blog-post">
        <p className="tree-root small">
          <a href="#blog" className="link">
            ~/blog
          </a>
          /{p.slug}
        </p>

        <h1 className="section-title mt-3">{p.title}</h1>
        <p className="small muted" style={{ marginBottom: 28 }}>
          {p.dateLabel} · {p.readingTime}
        </p>

        <div className="flex flex-col gap-5">
          {p.body.map((para, i) => (
            <p className="lead" key={i}>
              {para}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-12">
          <a href="#blog" className="btn btn-primary">
            Back to blog
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn">
            Share on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
