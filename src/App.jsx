import { useEffect, useLayoutEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import CV from "./sections/CV";
import ProjectsPage from "./sections/ProjectsPage";
import ProjectDetail from "./sections/ProjectDetail";
import ExperiencePage from "./sections/ExperiencePage";
import { featuredProjects } from "./constants";

const PAGES = {
  "#cv": CV,
  "#resume": CV,
  "#projects": ProjectsPage,
  "#experience": ExperiencePage,
  "#skills": Skills,
  "#about": About,
  "#blog": Blog,
  "#contact": Contact,
};

const BASE = "Aniket Kshirsagar";
const TAGLINE = `${BASE} - Data Analyst with Full Stack Developer`;

const titleFor = (hash) => {
  if (hash === "#resume" || hash === "#cv") return `${BASE} - Resume`;
  if (hash === "#projects") return `Websites - ${BASE}`;
  if (hash === "#experience") return `Experience - ${BASE}`;
  if (hash === "#skills") return `Skills - ${BASE}`;
  if (hash === "#about") return `My Journey - ${BASE}`;
  if (hash === "#blog") return `Blog - ${BASE}`;
  if (hash === "#contact") return `Contact - ${BASE}`;
  if (hash.startsWith("#project-")) {
    const p = featuredProjects.find((x) => x.slug === hash.replace("#project-", ""));
    return p ? `${p.name} - ${BASE}` : TAGLINE;
  }
  return TAGLINE;
};

const App = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash;
      setRoute(hash);
      document.title = titleFor(hash);
    };
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Every view is its own page now, so always open at the top.
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  let content;
  if (route.startsWith("#project-")) {
    content = <ProjectDetail slug={route.replace("#project-", "")} />;
  } else if (PAGES[route]) {
    const Page = PAGES[route];
    content = <Page />;
  } else {
    content = <Hero />;
  }

  return (
    <div className="layout">
      <Sidebar route={route} />
      <div className="content">
        {content}
        <Footer />
      </div>
    </div>
  );
};

export default App;
