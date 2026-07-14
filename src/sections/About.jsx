import React from 'react'
import Globe from 'react-globe.gl'
import Button1 from '../components/Button1'
import { useState } from 'react'



const About = () => {

  const [hasCopied, setHasCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText('aniket.kshirsagar.work08@gmail.com')
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }
  
  return (
    <section id='about' className='c-space my-20 text'>
    <div className='w-full text-white-600'>
    <h3 className='head-text'>About Me</h3>
      <div className='mt-5 grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img src='/images/grid_1.png' alt='grid-1' className='w-full sm:h-[276px] h-fit object-contain'/>
            <div>
              <p className='grid-headtext'>Hi, I'm Aniket</p>
              <p className='grid-subtext'>Data Analyst with 5+ years across banking, healthcare, and retail. I turn raw data into decisions using SQL, Python, Tableau, and Power BI.</p>
            </div>
          </div>
        </div>

        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container '>
            <img src='/images/grid2.png' alt='grid-2' className='w-full sm:h-[276px] h-fit object-contain justify-center items-center'/>
            <div>
              <p className='grid-headtext'>Tech Stack</p>
              <p className='grid-subtext'>SQL, Python (Pandas, NumPy), Tableau, Power BI, AWS (Redshift, Glue), Azure Data Factory, dbt, and Spark.</p>
            </div>
          </div>
        </div>

        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <div className='rounded-3xl w-full sm:h-[326px] h-fit flex items-center justify-center'>
              <Globe 
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                showLand
                showOcean
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                
              />
            </div>
            <div>
              <p className='grid-headtext'>
                I collaborate across US timezones.
              </p>
              <p className='grid-subtext'>
                Based in New Jersey, USA. Open to remote and hybrid roles.
              </p>
              <Button1 href="#contact" name='Contact Me' isBeam containerClass='w-full mt-20' />
            </div>
          </div>
        </div>
        <div className='xl:col-span-2 xl:row-span-3'>
          <div className='grid-container'>
            <img src='/images/grid3.png' alt='grid-3' className='w-full sm:h-[266px] h-fit object-contain'/>
            <div>
              <p className='grid-headtext'>
                What Drives Me
              </p>
              <p className='grid-subtext'>
                I love finding the story hidden in data: catching fraud patterns,
                forecasting demand, and building dashboards people actually use to decide.
                Learning new tools and sharpening my analysis excites me every day.
              </p>
            </div>
          </div>
        </div>
        <div className='xl:col-span-1 xl:row-span-2'>
          <div className='grid-container'>
            <img src='/images/grid4.png' alt='grid-4' className='w-full md:h-[276px] sm:h-[176px] h-fit object-cover sm:object-top '/>
            <div className='space-y-4'>
              <p className='grid-headtext text-center'>
                Contact Me
              </p>
             <div className='copy-container' onClick={handleCopy}>
              <img src={hasCopied ? 'images/tick.svg' : 'images/copy.svg'} alt='copy'/>
              <p className='lg:text-xl md:text-xl font-medium text-gray_gradient text-white'>aniket.kshirsagar.work08@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </section>
  )
}

export default About