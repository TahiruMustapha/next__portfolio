'use client'
import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { SkillData } from '@/constants'
import Image from 'next/image'
import SwiperCore, { Autoplay } from 'swiper';
const Page = () => {
  return (
    <div
    style={{backgroundImage:"url(/bg-2.jpg)"}}
    className='w-screen h-screen items-center justify-center bg-cover bg-center'>
      <div className='flex flex-col pt-20 gap-10 max-w-[100%]  text-center items-center'>
         <div className='flex mt-10 md:mt-0   flex-col items-center'>
             <h1 className=' md:text-[50px] font-semibold text-white text-[30px]'>
                Skills{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
           &{" "}
            </span>
            Technologies
                </h1>
                <p className=' text-gray-400 text-[20px]'>
                    Using the latest tech this world has to offer
                </p>
         </div>
         
         <Swiper
         slidesPerView={5}
         loop = {true}
         autoplay={{
             delay:0,
             disableOnInteraction:false
         }}
         speed={5000}
         modules={[Autoplay]}
         className=' max-w-[80%]'
         >
             {SkillData.map((skill,index)=>(
                <SwiperSlide key={index}>
                   <Image
                    src={skill.Image}
                    alt={skill.name}
                    width={skill.width}
                    height={skill.height}
                 
                   />
                </SwiperSlide>
             ))}
         </Swiper>
         <Swiper
         slidesPerView={5}
         loop = {true}
         autoplay={{
             delay:0,
             disableOnInteraction:false,
             reverseDirection:true
         }}
         speed={5000}
         modules={[Autoplay]}
         className=' max-w-[80%]'
         >
             {SkillData.map((skill,index)=>(
                <SwiperSlide key={index}>
                   <Image
                    src={skill.Image}
                    alt={skill.name}
                    width={skill.width}
                    height={skill.height}

                   />
                </SwiperSlide>
             ))}
         </Swiper>
      </div>
    </div>
  )
}

export default Page
