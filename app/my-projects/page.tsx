import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div
    style={{backgroundImage:'url(/mountains.jpg)'}}
    className='w-screen px-[2rem] overflow-x-hidden h-screen flex items-center justify-center  bg-center bg-cover'>
      <div className=' mt-[18rem] md:mt-16 flex flex-col items-center gap-5 md:grid md:grid-cols-2 md:gap-5 md:max-w-[90%] md:max-h-[90%]   h-[45rem]'>
         {Projects.map((project,index)=>(
            <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
            />
         ))}
      </div>
    </div>
  )
}

export default Page