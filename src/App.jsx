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
import ExperiencePage from "./sections/ExperiencePage";

const PAGES = { "#cv": CV, "#projects": ProjectsPage, "#experience": ExperiencePage };

const App = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash;
      setRoute(hash);
      if (PAGES[hash]) window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

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
