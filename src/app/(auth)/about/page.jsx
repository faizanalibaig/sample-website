import React from 'react'
import Image from 'next/image'


export const metadata={
  title:'About'
}

function page() {
  return (
  <div className='pr-40 pl-40 pt-32 pb-10 flex justify-center  h-auto flex-1'>
      <div className='border-r-2 p-10 h-72 flex items-center'>
        <Image 
           src="/people.png"
           width={600}
           height={600}
           alt='Contact phone image'
        />
      </div>
      <div className='pl-10 flex flex-col '>
        <h1 className='text-2xl font-bold pb-4'>About me</h1>
        <p className='text-lg'>
           "As a passionate computer science student and web developer, I thrive on the dynamic intersection of technology and creativity. My journey in the world of coding began with a genuine curiosity for problem-solving and a desire to bring ideas to life. Proficient in a variety of web development technologies, I specialize in crafting engaging and responsive websites. With a strong foundation in HTML, CSS, and JavaScript, I enjoy building user-centric interfaces that seamlessly blend form and function. Additionally, my toolkit includes popular frameworks like React for building interactive and efficient user interfaces. I am always eager to stay at the forefront of technological advancements, embracing new tools and methodologies. My commitment to continuous learning and innovation drives my enthusiasm for creating digital experiences that make an impact. Let's embark on this coding journey together, where creativity meets functionality and possibilities are limitless."</p>
      </div>
    </div>  )
}

export default page