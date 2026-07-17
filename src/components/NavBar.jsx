import { navLinks, profile } from "../constants";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="font-bold text-[15px]">
          {profile.name}
        </a>
        <nav className="nav-links">
          {navLinks.map(({ link, name }) => (
            <a key={name} href={link} className="hide-sm">
              {name}
            </a>
          ))}
          <a href="#cv">CV</a>
          <a href="#contact" className="btn btn-primary">
            Contact
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
