import React from 'react';
import Image from 'next/image';
import ivan from "../public/assets/Toroitich.jpeg"

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
         <div className='col-span-2'>
            <p className='uppercase text-xl tracking-widest text-[#722410]'>About</p>
            <h2 className='py-2'>Who I Am</h2>
            <p className='py-2 text-gray-600'>I&apos;m Ivan, and I&apos;m a junior student at Kabarak University studying Computer Science. I build successful websites that are fast, simple to use, and follow best practices.
            </p>
            <p>I work to create a better web: one that is fast, simple to use, beautiful, accessible to all, and free of frustration. Regardless of your specific business requirements, overcoming these challenges will increase your chances of success online.</p>
            <p>I take great pride in not only completing work to the high standard you expect, but also going the extra mile whenever possible. I enjoy learning about a company, its goals, and how I can best apply myself to ensure the success of your website.

            </p>
            <p className='underline py-2 text-gray-600 cursor-pointer'> Check out some of my latest projects</p>
         </div>
         <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 roundex-xl flex items-center p-4 justify-center hover:scale-105 ease-in duration-300'>
            <Image src={ivan}
					alt="/"
					width="1100"
					height="30"
               className='rounded-xl' />
         </div>
      </div>
    </div>
  );
}

export default About;