import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, skills, projectUrl}) => {
  return (
   <div className=" relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#44a3ac] to-[#552b20]">
   <Image src={backgroundImg} className="rounded-xl group-hover:opacity-20" alt="/" />
   <div className="hidden group-hover:block absolute bottom-[50%] right-[50%] translate-x-[50%] translate-y-[50%]">
     <h3 className="lg:text-2xl text-md text-white tracking-wider text-center">{title}</h3>
     <p className="pb-4 pt-2 text-white text-center">{skills}</p>
     <Link href={projectUrl}>
       <p className="text-center rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">More Info</p>
     </Link> 
   </div> 
 </div>
  );
}

export default ProjectItem;