import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
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
};

const BASE = "Aniket Kshirsagar";

const titleFor = (hash) => {
  if (hash === "#resume" || hash === "#cv") return `${BASE} - Resume`;
  if (hash === "#projects") return `Projects - ${BASE}`;
  if (hash === "#experience") return `Experience - ${BASE}`;
  if (hash.startsWith("#project-")) {
    const p = featuredProjects.find((x) => x.slug === hash.replace("#project-", ""));
    return p ? `${p.name} - ${BASE}` : `${BASE} - Data Analyst with Full Stack Developer`;
  }
  return `${BASE} - Data Analyst with Full Stack Developer`;
};

const isPage = (hash) => Boolean(PAGES[hash]) || hash.startsWith("#project-");

const scrollInstant = (fn) => {
  const html = document.documentElement;
  const prev = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  fn();
  html.style.scrollBehavior = prev;
};

const App = () => {
  const [route, setRoute] = useState(window.location.hash);
  const prevRoute = useRef(window.location.hash);

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

  // Handle scrolling after the new view has mounted.
  useLayoutEffect(() => {
    const prev = prevRoute.current;
    prevRoute.current = route;

    // A full page route always opens at its top.
    if (isPage(route)) {
      scrollInstant(() => window.scrollTo(0, 0));
      return;
    }

    // A home-section anchor reached FROM a page (home just mounted):
    // the browser's native anchor scroll fired before the section existed,
    // so scroll to it now, once it is in the DOM.
    if (isPage(prev)) {
      const id = route.replace("#", "");
      scrollInstant(() => {
        const el = id && id !== "top" ? document.getElementById(id) : null;
        if (el) el.scrollIntoView();
        else window.scrollTo(0, 0);
      });
    }
    // Same-page anchor navigation is left to the native smooth scroll.
  }, [route]);

  let content;
  if (route.startsWith("#project-")) {
    content = <ProjectDetail slug={route.replace("#project-", "")} />;
  } else if (PAGES[route]) {
    const Page = PAGES[route];
    content = <Page />;
  } else {
    content = (
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Blog />
        <Contact />
      </main>
    );
  }

  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        {content}
        <Footer />
      </div>
    </div>
  );
};

export default App;
