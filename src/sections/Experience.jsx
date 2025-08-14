import { OrbitControls } from '@react-three/drei';
import { workExperiences } from '../constants'
import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import Developer from '../components/Developer';
import CanvasLoader from '../components/Loading';


const Experience = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section id='experience' className='c-space my-20'>
      <div className='w-full text-white-600'>
        <h3 className='head-text'>My Work Experience</h3>

        <div className='work-container'>
          <div className='work-canvas'>
            <Canvas>
              <ambientLight intensity={0.8} />
              <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={5} />
              <directionalLight position={[0, 10, 5]} intensity={1.2} />
              <hemisphereLight skyColor="white" groundColor="#444444" intensity={4} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2}/>
              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName}/>
              </Suspense>
            </Canvas>
          </div>
          <div className='work-content'>
          <div className='sm:py-10 py-5 sm:px-5 px-2.5'>
  {workExperiences.map(({ id, name, icon, pos, duration, responsibilities, animation }, index) => (
    <div
      key={id}
      className='work-content_container group'
      onClick={() => setAnimationName(animation.toLowerCase())}
      onPointerOver={() => setAnimationName(animation.toLowerCase())}
      onPointerOut={() => setAnimationName('idle')}
    >
      <div className='flex flex-col h-full justify-start items-center py-2'>
        <div
          className={`work-content_logo ${index === 0 ? 'logo-white-bg' : ''}`}
        >
          <img src={icon} alt='logo' className='w-full h-full' />
        </div>
        <div className='work-content_bar'/>
      </div>
      <div className='sm:p-5'>
        <p className='font-bold text-white-800 text-xl'>{name}</p>
        <p className='text-md  mt-1.5 mb-1.5 text-[#839cb5] italic'>
          {pos}
        </p>
        <div className='text-white-50  flex items-center'>
          <img src='/images/calendar.svg' alt='calender' className=' inline-block' />
          <p className='ml-2'>{duration}</p>
        </div>
        <ul className='list-disc ms-4 flex flex-col text-white-50'>{responsibilities.map((duty) => <li className='list-disc mt-3' key={duty}>{duty}</li>)}</ul>
      </div>
    </div>
  ))}
</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience