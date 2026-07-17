import { navLinks, profile } from "../constants";

const NavBar = () => {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="font-bold text-[14px]">
          {profile.name}
        </a>
        <nav className="nav-links">
          {navLinks.map(({ link, name }) => (
            <a key={name} href={link} className="hide-sm">
              {name}
            </a>
          ))}
          <a href={profile.cv} target="_blank" rel="noreferrer">
            CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
