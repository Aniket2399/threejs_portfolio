import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { profile } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setForm({ name: "", email: "", message: "" });
      setStatus("Message sent. I will get back to you soon.");
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. You can email me directly instead.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <h2 className="section-title">Contact</h2>
        <p className="section-note">
          Hiring for a data or analytics role, or want a closer look at one of these dashboards? Send
          a note.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="leader small">
              <span className="font-bold">Email</span>
              <span className="leader-fill" />
              <a href={`mailto:${profile.email}`} className="link">
                {profile.email}
              </a>
            </div>
            <div className="leader small">
              <span className="font-bold">LinkedIn</span>
              <span className="leader-fill" />
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link">
                /in/aniketk99
              </a>
            </div>
            <div className="leader small">
              <span className="font-bold">GitHub</span>
              <span className="leader-fill" />
              <a href={profile.github} target="_blank" rel="noreferrer" className="link">
                /Aniket2399
              </a>
            </div>
            <div className="leader small">
              <span className="font-bold">Location</span>
              <span className="leader-fill" />
              <span className="muted">{profile.location}</span>
            </div>
            <p className="small muted mt-4">
              Open to remote and hybrid roles, and on-site in the NJ/NYC metro.
            </p>
          </div>

          <div className="card ticked" style={{ padding: 0 }}>
            <div className="card-head">Send a message</div>
            <form ref={formRef} onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
              <label>
                <span className="field-label">Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="field"
                  required
                  placeholder="Your name"
                />
              </label>
              <label>
                <span className="field-label">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="field"
                  required
                  placeholder="you@company.com"
                />
              </label>
              <label>
                <span className="field-label">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="field"
                  required
                  rows={5}
                  placeholder="Hi Aniket, we are hiring for..."
                />
              </label>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? "Sending..." : "Send"}
              </button>
              {status && <p className="small muted">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
