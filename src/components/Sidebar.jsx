import { navLinks, profile } from "../constants";
import ThemeToggle from "./ThemeToggle";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <a href="#top" className="sidebar-name">
        Aniket
        <br />
        Kshirsagar
      </a>

      <nav className="sidebar-nav">
        {navLinks.map(({ link, name }) => (
          <a key={name} href={link}>
            {name}
          </a>
        ))}
        <a href="#resume">CV</a>
        <a href="#contact" className="cta">
          Contact
        </a>
      </nav>

      <div className="sidebar-foot">
        <ThemeToggle />
      </div>
    </aside>
  );
};

export default Sidebar;
