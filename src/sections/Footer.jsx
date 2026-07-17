import { profile, socials } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrap flex flex-wrap items-center justify-between gap-3">
        <p>
          {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-4">
          {socials.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="link">
              {s.name}
            </a>
          ))}
          <a href={profile.cv} target="_blank" rel="noreferrer" className="link">
            CV
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
