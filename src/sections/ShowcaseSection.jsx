import { useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);


const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  

  
  useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { 
          y: 50, opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          }     }
      )
    })
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 }, 
      { opacity: 1, duration: 1.5 }
    )
  },[])

  return (
    <section id='projects' ref={sectionRef} className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>
          {/*Left Side*/}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper bg-[#0d1b2a] px-5">
              <div className=" w-100% h-full flex justify-center items-center ">
                <img src="/images/pepstats.png" alt="Soccer PepStats football analytics dashboard" className="  object-contain w-full h-auto rounded-lg "/>
                </div>
            </div>
            <div className="text-content">
                <h2>Soccer PepStats, an end-to-end football analytics platform turning 1.3M raw match events into an interactive scouting dashboard.</h2>
                <p className="text-white-50 md:text-xl">A Lambda-architecture platform (Python, pandas, DuckDB, FastAPI, React/TypeScript) that transforms ~1.3M StatsBomb events into a 12-tab dashboard with xG, player percentiles, and a live World Cup 2026 mode. 60+ automated tests, Dockerized, CI/CD.</p>
                <div className="flex gap-4 mt-3">
                  <a href="https://pep-stats-analytics.vercel.app" target="_blank" rel="noreferrer" className="project-link">Live</a>
                  <a href="https://github.com/Aniket2399/Pep_Stats_Analytics" target="_blank" rel="noreferrer" className="project-link">Code</a>
                </div>
              </div>
          </div>
          {/*Right Side*/}
          <div className="project-list-wrapper overflow-hidden" >
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#0d0d0d] flex justify-center items-center rounded-xl">
               <img
                src="/images/courtside.png"
                alt="COURTSIDE NBA analytics dashboard"
                className="object-contain max-w-full max-h-full border-4 border-black rounded-xl"
                />
              </div>
              <h2>COURTSIDE, an NBA analytics platform: 2.2GB of raw data into dbt + DuckDB marts and a React dashboard.</h2>
              <div className="flex gap-4 mt-2">
                <a href="https://courtside-nba-analytics.vercel.app" target="_blank" rel="noreferrer" className="project-link">Live</a>
                <a href="https://github.com/Aniket2399/nba-data-analytics" target="_blank" rel="noreferrer" className="project-link">Code</a>
              </div>
            </div>


            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffefdb] flex justify-center items-center rounded-xl">
                <img
                  src="/images/grad_ease.png"
                  alt="GradEase graduation e-commerce platform"
                  className="object-contain max-w-full max-h-full border-4 border-black rounded-xl"
                />
              </div>
              <h2>GradEase, a full-stack MERN graduation store with an AI chatbot for recommendations.</h2>
              <div className="flex gap-4 mt-2">
                <a href="https://github.com/Aniket2399/Grad-Ease" target="_blank" rel="noreferrer" className="project-link">Code</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection