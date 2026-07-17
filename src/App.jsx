import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import CV from "./sections/CV";
import Work from "./sections/Work";

const App = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const onHash = () => {
      setRoute(window.location.hash);
      if (window.location.hash === "#cv" || window.location.hash === "#work") {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  if (route === "#cv") return <CV />;
  if (route === "#work") return <Work />;

  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
