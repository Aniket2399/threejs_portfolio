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
            <div className="image-wrapper bg-[#91CA91] px-5">
              <div className=" w-100% h-full flex justify-center items-center ">
                <img src="/images/project_3.png" alt="project1" className="  object-contain w-full h-auto "/>
                </div>
            </div>
            <div className="text-content">
                <h2>SelfPrep – AI-Powered Interview Practice and Grading with a Seamless, Insightful, and Skill-Boosting Experience.</h2>
                <p className="text-white-50 md:text-xl">A sleek, AI-driven platform built with Next.js, Tailwind CSS, Vapi AI, and advanced AI models, designed to simulate spoken interviews, grade responses, and provide actionable feedback for confident career preparation.</p>
              </div>
          </div>
          {/*Right Side*/}
          <div className="project-list-wrapper overflow-hidden" >
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb] flex justify-center items-center rounded-xl">
               <img
                src="/images/grad_ease.png"
                alt="project2"
                className="object-contain max-w-full max-h-full border-4 border-black rounded-xl"
                />
              </div>
              <h2>Grad-Ease - Graduation Shopping</h2>
            </div>


            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb] flex justify-center items-center rounded-xl">
                <img
                  src="/images/project_2.png"
                  alt="YC Directory"
                  className="object-contain max-w-full max-h-full border-4 border-black rounded-xl"
                />
              </div>
              <h2>Discover Movie Magic</h2>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection