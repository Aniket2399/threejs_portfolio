import { profile } from "../constants";
import { posts } from "../constants/posts";

// lightweight inline markup: **bold**, ==highlight==, and _italic_
const renderRich = (text) => {
  const parts = [];
  const re = /(\*\*[^*]+\*\*|==[^=]+==|_[^_]+_)/g;
  let last = 0;
  let m;
  let key = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith("**")) parts.push(<strong key={key++}>{tok.slice(2, -2)}</strong>);
    else if (tok.startsWith("==")) parts.push(<mark className="hl" key={key++}>{tok.slice(2, -2)}</mark>);
    else parts.push(<em key={key++}>{tok.slice(1, -1)}</em>);
    last = m.index + tok.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
};

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
              {renderRich(para)}
            </p>
          ))}
        </div>

        {p.image && (
          <figure className="post-figure">
            <img src={p.image.src} alt={p.image.alt} loading="lazy" />
            {p.image.caption && <figcaption>{p.image.caption}</figcaption>}
          </figure>
        )}

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
