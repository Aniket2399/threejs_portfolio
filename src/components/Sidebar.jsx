import { navLinks, profile } from "../constants";
import ThemeToggle from "./ThemeToggle";

const Sidebar = ({ route = "" }) => {
  const isActive = (link) => {
    if (link === "#resume") return route === "#resume" || route === "#cv";
    return route === link;
  };

  return (
    <aside className="sidebar">
      <a href="#top" className="sidebar-name">
        Aniket
        <br />
        Kshirsagar
      </a>

      <nav className="sidebar-nav">
        {navLinks.map(({ link, name }) => (
          <a key={name} href={link} className={isActive(link) ? "active" : undefined}>
            {name}
          </a>
        ))}
        <a href="#resume" className={isActive("#resume") ? "active" : undefined}>
          CV
        </a>
        <a href="#contact" className={`cta ${route === "#contact" ? "active" : ""}`}>
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
