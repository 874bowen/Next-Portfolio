import Image from 'next/image';
import React from 'react';
// import logo from "../public/assets/bivan.png";
// import bootstrap from "../public/assets/skills/bootstrap.png"
import tailwind from "../public/assets/skills/tailwind.png"
import html from "../public/assets/skills/html.png"
import css from "../public/assets/skills/css.png"
import js from "../public/assets/skills/javascript.png"
import react from "../public/assets/skills/react.png"
import node from "../public/assets/skills/node.png"
import next from "../public/assets/skills/nextjs.png"
import mongo from "../public/assets/skills/mongo.png"

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
         <p className='uppercase text-xl tracking-widest text-[#722410]'>Skills</p>
         <h2 className='py-2 text-[#44a3ac]'>What I Can Do</h2>
         <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* TODO - create a component*/}
            <div className='p-6 shadow-xl rounded-xl hover:scale-90 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={html} alt="/" width="100" height="100" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>HTML</h3>
                </div>
              </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-90 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={css} alt="/" width="100" height="100" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>CSS</h3>
                </div>
              </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-90 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={tailwind} alt="/" width="100" height="100" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Tailwind</h3>
                </div>
              </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-90 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={mongo} alt="/" width="100" height="100" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Mongo</h3>
                </div>
              </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-90 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={js} alt="/" width="100" height="100" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>JavaScript</h3>
                </div>
              </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-90 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={react} alt="/" width="100" height="100" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>React</h3>
                </div>
              </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-90 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={next} alt="/" width="100" height="100" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Next</h3>
                </div>
              </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-90 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={node} alt="/" width="100" height="100" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Node</h3>
                </div>
              </div>
            </div>

         </div>
      </div>
    </div>
  );
}

export default Skills;