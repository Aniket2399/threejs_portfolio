import LogoSection from "./sections/LogoSection"
import NavBar from "./components/NavBar"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import Experience from "./sections/Experience"
import Contact from "./sections/Contact"
import About from "./sections/About"
import TechStack from "./sections/TechStack"
import Footer from "./sections/Footer"

const App = () => {
  return (
    <>
    <NavBar />
      <Hero />
      <About />
      <ShowcaseSection />
      <LogoSection />
      {/* <FeatureCards /> */}
      <Experience />
      <TechStack />
      <Contact />
      <Footer />
    </>
  )
}

export default App