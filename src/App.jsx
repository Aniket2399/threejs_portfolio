import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";
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
    return p ? `${p.name} - ${BASE}` : `${BASE} - Data Analyst`;
  }
  return `${BASE} - Data Analyst`;
};

const App = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash;
      setRoute(hash);
      document.title = titleFor(hash);
      if (PAGES[hash] || hash.startsWith("#project-")) window.scrollTo(0, 0);
    };
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  if (route.startsWith("#project-")) {
    return <ProjectDetail slug={route.replace("#project-", "")} />;
  }

  const Page = PAGES[route];
  if (Page) return <Page />;

  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
